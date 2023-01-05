import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios"

function TripDetailsForms() {
  const [enteredDistance, setEnteredDistance] = useState("");
  const distanceChangeHandler = (event) => {
    setEnteredDistance(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [startEnterdTime, setStartEnterTime] = useState("");
  const startTimeChangeHandler = (event) => {
    setStartEnterTime(event.target.value);
  };

  const [endEnterdTime, setEndEnterTime] = useState("");
  const endTimeChangeHandler = (event) => {
    setEndEnterTime(event.target.value);
  };
  console.log(startEnterdTime+` `+endEnterdTime)
  const submitHandler =async (event) => {
    event.preventDefault();

    const customerData = {
      spare: enteredDate,
      date: enteredDate,
      beginTime: enteredDate+` `+startEnterdTime+`:00`,
      endTime: enteredDate+` `+endEnterdTime+`:00`,
    };
    console.log(customerData.date)
    
    try{
      await axios.post("http://localhost:8080/tripdetails",customerData)
    }catch(err){
      console.log(err)
    }
    console.log(customerData);
    setEnteredDistance("");
    setEnteredDate("");
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Trip Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Date </label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Distance Travelled</label>
              <input
                type="number"
                placeholder="Enter the distance Travelled"
                onChange={distanceChangeHandler}
                value={enteredDistance}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Begin Time</label>
              <input
                type="time"
                onChange={startTimeChangeHandler}
                value={startEnterdTime}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>End Time</label>
              <input
                type="Time"
                onChange={endTimeChangeHandler}
                value={endEnterdTime}
                required
              ></input>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TripDetailsForms;
