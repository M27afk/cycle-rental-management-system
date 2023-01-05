import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";

function CustomerDetailsForms() {
  const [enteredName, setEnteredName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const [enteredAddress, setEnteredTAddress] = useState("");
  const addressChangeHandler = (event) => {
    setEnteredTAddress(event.target.value);
  };

  const [enteredCycCpacity, setEnteredCycCpacity] = useState("");
  const cycleChangeHandler = (event) => {
    setEnteredCycCpacity(event.target.value);
  };

  const [enteredEmpId, setEnteredEmpId] = useState("");
  const empChangeHandler = (event) => {
    setEnteredEmpId(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const customerData = {
      stnName: enteredName,
      stnAddress: enteredAddress,
      cycCpacity: enteredCycCpacity,
      empID: enteredEmpId,
    };

    try {
      await axios.post("http://localhost:8080/station", customerData);
    } catch (err) {
      console.log(err);
    }
    console.log(customerData);
    setEnteredName("");
    setEnteredTAddress("");
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Station Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Staion Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={nameChangeHandler}
                value={enteredName}
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

            <div className="new-expense__control">
              <label>Cycle capacity</label>
              <input
                type="number"
                placeholder="Enter cycle capacity"
                onChange={cycleChangeHandler}
                value={enteredCycCpacity}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Employee ID</label>
              <input
                type="number"
                placeholder="Enter employee ID"
                onChange={empChangeHandler}
                value={enteredEmpId}
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
export default CustomerDetailsForms;
