import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ totalDay }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalDays, setTotalDays] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleChange = (value) => {
    setStartDate(value[0]);
    setEndDate(value[1]);

    if (value[0] && value[1]) {
      const diffTime = Math.abs(value[1] - value[0]);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(diffDays);
      totalDay(totalDays);
    } else {
      setTotalDays(null);
    }
  };
  return (
    <>
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={handleChange}
        dateFormat={"dd MMM yyyy"}
        placeholderText="silahkan pilih tanggal"
        onFocus={() => setCalendarOpen(true)}
        onClose={() => setCalendarOpen(false)}
      >
        {calendarOpen && (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setCalendarOpen(false)}
          >
            Pilih
          </button>
        )}
      </DatePicker>
    </>
  );
};

export default DateInput;
