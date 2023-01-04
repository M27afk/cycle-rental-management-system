import React from "react";
import { useState } from "react";
import "./GenralStyles.css";

function EmployeeDetailsForms() {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAddress, setEnteredTAddress] = useState("");
  const addressChangeHandler = (event) => {
    setEnteredTAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const customerData = {
      name: enteredName,
      date: new Date(enteredDate),
      address: enteredAddress,
    };
    console.log(customerData);
    setEnteredName("");
    setEnteredDate("");
    setEnteredTAddress("");
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Employee Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={nameChangeHandler}
                value={enteredName}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Date of Birth</label>
              <input
                type="date"
                onChange={dateChangeHandler}
                value={enteredDate}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                onChange={addressChangeHandler}
                value={enteredAddress}
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
export default EmployeeDetailsForms;
