import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import * as mockApi from "./MockApi";

// Intercept MockApi functions
jest.mock("./MockApi");

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

beforeEach(() => {
  localStorageMock.clear();
  jest.clearAllMocks();
});

describe("BookingForm", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<BookingForm />);
  });

  it("displays error messages when form is submitted with empty fields", async () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButton);

    expect(await screen.findByText("First Name is required")).toBeInTheDocument();
    expect(screen.getByText("Last Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Occasion is required")).toBeInTheDocument();
    expect(screen.getByText("Date and Time are required")).toBeInTheDocument();
  });

  it("submits the form successfully when all fields are filled", async () => {
    const mockStoredTimes = [
      "11:00 AM",
      "11:30 AM",
      "12:00 PM",
      "12:30 PM",
      "1:00 PM",
      "1:30 PM",
      "2:00 PM",
      "2:30 PM",
      "7:30 PM",
      "8:00 PM",
      "8:30 PM",
      "9:00 PM",
      "9:30 PM",
    ];

    mockApi.fetchAvailableTimes.mockResolvedValue(mockStoredTimes);
    mockApi.updateAvailableTimes.mockResolvedValue(true);

    render(<BookingForm />);

    userEvent.type(screen.getByLabelText(/first name/i), "John");
    userEvent.type(screen.getByLabelText(/last name/i), "Doe");
    userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 7);

    const formattedDate = futureDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const dateInput = screen.getByLabelText("Date*");

    fireEvent.change(dateInput, { target: { value: formattedDate } });

    const timeSelect = await screen.findByLabelText("Time*");
    userEvent.selectOptions(timeSelect, "9:00 PM");

    const submitButton = screen.getByRole("button", { name: /submit/i });
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockApi.updateAvailableTimes).toHaveBeenCalledWith(
        expect.any(Date),
        expect.not.arrayContaining(["9:00 PM"]),
      );
    });

    expect(await screen.findByText("Your reservation was successful!")).toBeInTheDocument();
  });
});
