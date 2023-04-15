import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';


function Calender (props) {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>Check your Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date}  />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
      
}
  
  
  
export default Calender;