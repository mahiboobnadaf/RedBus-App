'use client';

import React, { useState } from 'react';
import SeatPicker from 'react-seat-picker';



const SeatSelection = ({ seatLayout }) => {
  const [loading, setLoading] = useState(false);

  const addSeatCallback = ({ row, number, id }, addCb) => {
    setLoading(true);
    console.log(`Added seat ${number}, row ${row}, ID ${id}`);
    setTimeout(() => {
      addCb(row, number, id);
      setLoading(false);
    }, 500);
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
    setLoading(true);
    console.log(`Removed seat ${number}, row ${row}, ID ${id}`);
    setTimeout(() => {
      removeCb(row, number);
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <h2>Select Your Seat</h2>
      <SeatPicker
        addSeatCallback={addSeatCallback}
        removeSeatCallback={removeSeatCallback}
        rows={seatLayout}
        maxReservableSeats={3}
        alpha
        visible
        selectedByDefault={false}
        loading={loading}
      />
    </div>
  );
};

export default SeatSelection;
