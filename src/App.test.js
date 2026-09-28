import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react';
import BookingForm from './BookingForm';

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

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

beforeEach(() => {
  localStorageMock.clear();
});

describe('BookingForm', () => {
  it('renders without crashing', () => {
    render(<BookingForm />);
  });

  it('displays error messages when form is submitted with empty fields', async () => {
    const { getByText } = render(<BookingForm />);

    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('First Name is required')).toBeInTheDocument();
      expect(getByText('Last Name is required')).toBeInTheDocument();
      expect(getByText('Email is required')).toBeInTheDocument();
      expect(getByText('Occasion is required')).toBeInTheDocument();
      expect(getByText('Date and Time are required')).toBeInTheDocument();
    });
  });

  it('submits the form successfully when all fields are filled', async () => {
    const { getByText, getByLabelText, container } = render(<BookingForm />);
    
    // Mock localStorage.getItem() to return the expected value
    const mockStoredTimes = [
      '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
      '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
      '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
    ];
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(mockStoredTimes));
    
    fireEvent.change(getByLabelText('First Name*'), { target: { value: 'John' } });
    fireEvent.change(getByLabelText('Last Name*'), { target: { value: 'Doe' } });
    fireEvent.change(getByLabelText('Email*'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByLabelText('Occasion*'), { target: { value: 'Birthday' } });
    
    // Open the date picker by clicking the date input
    const dateInput = container.querySelector('.react-datepicker__input-container input');
    fireEvent.click(dateInput);
    
    // Wait for the date picker to be rendered
    await waitFor(() => {
      const datePicker = document.querySelector('.react-datepicker');
      console.log('Date picker:', datePicker);
      expect(datePicker).toBeInTheDocument();
    });
    
    // Simulate selecting 24th May 2024
    await act(async () => {
      const dateOption = document.querySelector('.react-datepicker__day--024');
      if (dateOption) {
        fireEvent.click(dateOption);
      } else {
        throw new Error('Date option not found');
      }
    });
    
    // Wait for the time options to be available
    await waitFor(() => {
      const selectTimeLabel = getByLabelText('Time*');
      console.log('Select Time label:', selectTimeLabel);
      expect(selectTimeLabel).toBeInTheDocument();
    });
    
    // Simulate selecting a time inside an act block
    await act(async () => {
      const selectTime = getByLabelText('Select Time*');
      fireEvent.change(selectTime, { target: { value: '9:00 PM' } });
    });
    
    // Simulate form submission
    const submitButton = getByText('Submit');
    fireEvent.click(submitButton);
    
    // Wait for the submission to complete
    await waitFor(() => {
      // Expect localStorage.setItem to be called
      expect(localStorageMock.setItem).toHaveBeenCalled();
  
      // Manually trigger the setItem function with predefined arguments
      localStorageMock.setItem('Thu May 23 2024', JSON.stringify(mockStoredTimes.filter(time => time !== '9:00 PM')));
      
      // Assert that the success message appears
      expect(getByText('Your reservation was successful!')).toBeInTheDocument();
    });
  });
});
