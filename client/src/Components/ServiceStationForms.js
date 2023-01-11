import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";
<<<<<<< HEAD
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
=======

>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
function ServiceStationForms() {
  const [enteredSpare, setEnteredSpare] = useState("");
  const spareChangeHandler = (event) => {
    setEnteredSpare(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredEmpId, setEnteredEmpId] = useState("");
  const empChangeHandler = (event) => {
    setEnteredEmpId(event.target.value);
  };

  const [enteredCycId, setEnteredCycId] = useState("");
  const cycleIdChangeHandler = (event) => {
    setEnteredCycId(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
<<<<<<< HEAD
    const serviceDetails = {
=======
    const serviceDetails   = {
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
      empID: enteredEmpId,
      sparePartsCount: enteredSpare,
      dueDate: enteredDate,
      cycID: enteredCycId,
    };

    try {
<<<<<<< HEAD
      const res = await axios.post(
        "http://localhost:8080/service",
        serviceDetails
      );
      if (res.data.errno) alert(res.data.sqlMessage);
=======
      const res= await axios.post("http://localhost:8080/service", serviceDetails);
      if(res.data.errno)
      alert (res.data.sqlMessage)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    } catch (err) {
      console.log(err);
    }
    console.log(serviceDetails);
    setEnteredSpare("");
    setEnteredDate("");
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Service Station Details</header>
            <img src={image} alt=" logo" className="trin-img" />
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

              <div className="new-expense__control">
                <label>Cycle ID</label>
                <input
                  type="number"
                  placeholder="Enter cycle ID"
                  onChange={cycleIdChangeHandler}
                  value={enteredCycId}
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
    </>
=======
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

            <div className="new-expense__control">
              <label>Cycle ID</label>
              <input
                type="number"
                placeholder="Enter cycle ID"
                onChange={cycleIdChangeHandler}
                value={enteredCycId}
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
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  );
}
export default ServiceStationForms;
