import React from "react";
import { useState } from "react";
import "./GenralStyles.css";

function ServiceStationForms() {
  const [enteredSpare, setEnteredSpare] = useState("");
  const spareChangeHandler = (event) => {
    setEnteredSpare(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const customerData = {
      spare: enteredSpare,
      date: new Date(enteredDate),
    };
    console.log(customerData);
    setEnteredSpare("");
    setEnteredDate("");
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Service Station Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Service Date </label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Spare Parts</label>
              <input
                type="number"
                placeholder="Number of Spare Parts Used"
                onChange={spareChangeHandler}
                value={enteredSpare}
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
export default ServiceStationForms;
