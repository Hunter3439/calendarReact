import { useState } from "react";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import Button from "./components/button/button";
import Modal from "./components/modal/modal";

function App() {
  let dateContainer = null;
  const [dateType, dateChange] = useState(new Date());
  const [inputValue  , setInputValue] = useState('')
  function dateChangeEvent(date) 
  {
    dateChange(date);
  }
  if (dateType) 
  {
    dateContainer = <h2>Selected date : {dateType.toDateString()}</h2>;
  } else 
  {
    dateContainer = <h2>Selected date : no selected</h2>;
  }

  function inSave(event) 
  { 
    setInputValue(event.target.value)
  }

  return (
    <>
      <div className="wrapper">
        <Calendar
          onClickDay={() => dateChangeEvent}
          onChange={dateChange}
          value={dateType}
        />

        <div className="container">
          <h1>Create Event</h1>
          {dateContainer}
          <div className="inner-container">
            <input className="event-name" type="text" placeholder="Event Name" onChange={inSave } value={inputValue}  />
            <Button>Click Here to Add Event</Button>
           
          </div>
   
        </div>
      </div>
    </>
  );
}

export default App;
