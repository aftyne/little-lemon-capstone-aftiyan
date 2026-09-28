const defaultAvailableTimes = [
    '11:00 AM', '11:30 AM', '12:00 AM', '12:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];
  
  const fetchAvailableTimes = async (selectedDate) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedTimes = JSON.parse(localStorage.getItem(selectedDate.toDateString())) || defaultAvailableTimes;
        resolve(storedTimes);
      }, 500); 
    });
  };
  
  const updateAvailableTimes = async (selectedDate, updatedTimes) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(selectedDate.toDateString(), JSON.stringify(updatedTimes));
        resolve(updatedTimes);
      }, 500); 
    });
  };
  
  export { fetchAvailableTimes, updateAvailableTimes };
  