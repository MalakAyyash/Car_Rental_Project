import React, { useState } from 'react';

export default function Data() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [differenceInDays, setDifferenceInDays] = useState(null);
  const calculateDifference = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (isNaN(start) || isNaN(end)) {
      // Handle invalid date input
      setDifferenceInDays(null);
      return;
    }
    const difference = Math.abs(end - start);
    const differenceInDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
    setDifferenceInDays(differenceInDays);
  };
  return (
    <div>
      <h2>Date Difference Calculator</h2>
      <div>
        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button onClick={calculateDifference}>Calculate Difference</button>
      {differenceInDays !== null && (
        <p>
          The difference between the two dates is {differenceInDays} {differenceInDays === 1 ? 'day' : 'days'}.
        </p>
      )}
    </div>
  );
}