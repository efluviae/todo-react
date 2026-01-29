const DatePickerMinToday = ({ selectedDate, minDate, handleDateChange }) => {
  return (
    <div className="date-picker">
      <h3>Prazo:</h3>
      <input
        className="date-picker__input input"
        type="date"
        min={minDate}
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePickerMinToday;
