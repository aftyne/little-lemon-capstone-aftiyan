import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import { fetchAvailableTimes, updateAvailableTimes } from './MockApi';

const BookingForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [occasion, setOccasion] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (selectedDate) {
      const fetchTimes = async () => {
        const times = await fetchAvailableTimes(selectedDate);
        setAvailableTimes(times);
      };
      fetchTimes();
    }
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const updatedTimes = availableTimes.filter((time) => time !== selectedTime);
      await updateAvailableTimes(selectedDate, updatedTimes);
      setSubmissionSuccess(true);
      resetForm();
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
      valid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
      valid = false;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!occasion.trim()) {
      errors.occasion = 'Occasion is required';
      valid = false;
    }

    if (!selectedDate || !selectedTime) {
      errors.dateTime = 'Date and Time are required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setOccasion('');
    setNumGuests(1);
    setSelectedDate(null);
    setSelectedTime('');
    setErrors({});
    setEmailError('');
  };

  const timesOptions = availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));

  return (
    <div className="reservation-form-wrapper">
      <h2>Reserve a Table</h2>
      <div className="reservation-form-container">
        <form onSubmit={handleSubmit} noValidate aria-labelledby="reservation-form-title">
          <div className="form-group">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              aria-required="true"
              aria-describedby="firstNameError"
            />
            {errors.firstName && <span id="firstNameError" className="error">{errors.firstName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              aria-required="true"
              aria-describedby="lastNameError"
            />
            {errors.lastName && <span id="lastNameError" className="error">{errors.lastName}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              aria-required="true"
              aria-describedby="emailError"
            />
            {emailError && <span id="emailError" className="error">{emailError}</span>}
            {errors.email && <span id="emailError" className="error">{errors.email}</span>}
          </div>
          <div className="form-group range-container">
            <label htmlFor="numGuests">Number of Guests*</label>
            <input
              className="accent"
              type="range"
              id="numGuests"
              min="1"
              max="10"
              value={numGuests}
              onChange={(e) => setNumGuests(parseInt(e.target.value))}
              required
              aria-required="true"
              aria-describedby="numGuestsError"
            />
            <span className="range-value">{numGuests}</span>
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Occasion*</label>
            <div className="occasion-dropdown">
              <FontAwesomeIcon className="occasion-icon" icon={faGlassCheers} />
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-required="true"
                aria-describedby="occasionError"
              >
                <option value="" disabled hidden>
                  Select Occasion
                </option>
                <option value="casual">Casual</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            {errors.occasion && <span id="occasionError" className="error">{errors.occasion}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="dateTime">Date*</label>
            <DatePicker
              id="dateTime"
              className="date-picker-input"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
              minDate={new Date()}
              placeholderText="Select a date"
              aria-label="Select a date"
              aria-required="true"
            />
            {selectedDate && (
              <div>
                <label htmlFor="select-time" id="select-time-label">
                  Time*
                </label>
                <select
                  id="select-time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  required
                  aria-required="true"
                  aria-describedby="dateTimeError"
                >
                  <option value="" disabled hidden>
                    Select Time
                  </option>
                  {timesOptions}
                </select>
              </div>
            )}
            {errors.dateTime && <span id="dateTimeError" className="error">{errors.dateTime}</span>}
          </div>
          <button className="formButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      {submissionSuccess && (
        <div className="success-message" role="alert">
          Your reservation was successful!
        </div>
      )}
    </div>
  );
};

export default BookingForm;
