import React, { useState } from 'react';
import { DatePicker } from 'antd';
import "./DateSelector.css" ; 

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  return (
    <div className='DateB' >
    <DatePicker onChange={handleDateChange}  />
    </div>);
};

export default DateSelector;
