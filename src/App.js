import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.scss";

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reservation Date</h1>
      </header>
      <div className="calendar-container">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className="date-picker"
        />
      </div>
      <button onClick={() => console.log("Continue clicked")}>Continue</button>
    </div>
  );
}

export default App;
