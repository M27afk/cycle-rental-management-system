import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
<<<<<<< HEAD
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
=======

>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
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
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const navigate=useNavigate()
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  const submitHandler = async (event) => {
    event.preventDefault();
    const stnData = {
      stnName: enteredName,
      stnAddress: enteredAddress,
      cycCapacity: enteredCycCpacity,
      empID: enteredEmpId,
    };

    try {
<<<<<<< HEAD
      // console.log(stnData)
      const res = await axios.post("http://localhost:8080/station", stnData);
      if (res.data.errno) alert(res.data.sqlMessage);

      navigate("/station");
=======
     // console.log(stnData)
      const res=  await axios.post("http://localhost:8080/station", stnData)
      if(res.data.errno)
      alert (res.data.sqlMessage)

      navigate("/station")
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    } catch (err) {
      console.log(err);
    }
    //console.log(customerData);
    setEnteredName("");
    setEnteredTAddress("");
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Station Details</header>
            <img src={image} alt=" logo" className="trin-img" />
          </div>

          <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
              <div className="new-expense__control">
                <label>Station Name</label>
                <input
                  type="text"
                  placeholder="Enter station name"
                  onChange={nameChangeHandler}
                  value={enteredName}
                  required
                ></input>
              </div>

              <div className="new-expense__control">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter address"
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
    </>
=======
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Station Details</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Station Name</label>
              <input
                type="text"
                placeholder="Enter station name"
                onChange={nameChangeHandler}
                value={enteredName}
                required
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter address"
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
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  );
}
export default CustomerDetailsForms;
