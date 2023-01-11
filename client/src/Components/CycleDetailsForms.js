import React from "react";
import { useState } from "react";
import "./GenralStyles.css";
<<<<<<< HEAD
import axios from "axios";
import { useNavigate } from "react-router";
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
const options = ["Good", "Moderate", "Poor"];
=======
import axios from "axios"
import { useNavigate } from "react-router";

const options = ["Good", "Moderate","Poor"];
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
const gearCheck = ["Yes", "No"];

function CycleDetailsForms() {
  // const [enteredDistance, setEnteredDistance] = useState("");
  // const distanceChangeHandler = (event) => {
  //   setEnteredDistance(event.target.value);
  // };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredIsGear, setEnteredIsGear] = useState(gearCheck[0]);

  const [enterdCondition, setEnterCondition] = useState(options[0]);
<<<<<<< HEAD
  console.log(enterdCondition, enteredIsGear);
=======
  console.log(enterdCondition,enteredIsGear)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  // const SubscriptionChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setEnterSubscription(Number(event.target.value));

  // };

<<<<<<< HEAD
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    const value = enteredIsGear === "Yes" ? 1 : 0;
    event.preventDefault();
    const customerData = {
      serviceDate: enteredDate,
=======
  const navigate=useNavigate()
  const submitHandler =async (event) => {
    const value=(enteredIsGear==="Yes"?1:0)
    event.preventDefault();
    const customerData = {
      serviceDate:enteredDate,
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
      isGear: value,
      cycCondition: enterdCondition,
    };
    console.log(customerData);
<<<<<<< HEAD
    try {
      const res = await axios.post("http://localhost:8080/cycle", customerData);
      console.log(res.request.status);

      navigate("/cycle");
    } catch (err) {
      console.log(err);
=======
    try{
      const res= await axios.post("http://localhost:8080/cycle",customerData)
      console.log(res.request.status)

      navigate("/cycle")
    }catch(err){
      console.log(err)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
    }
    // setEnteredDistance("");
    setEnteredDate("");
    setEnteredIsGear(gearCheck[0]);
    setEnterCondition(options[0]);
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <div className="new-expense">
          <div className="login-header">
            <header className="titles">Cycle Details</header>
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

              {/* <div className="new-expense__control">
=======
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Cycle Details</header>
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

            {/* <div className="new-expense__control">
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
              <label>Distance Travelled </label>
              <input
                type="number"
                placeholder="Enter distance travelled"
                onChange={distanceChangeHandler}
                value={enteredDistance}
                required
              ></input>
            </div> */}

<<<<<<< HEAD
              <div className="new-expense__control">
                <label>Cycle Condition</label>
                <select
                  required
                  value={enterdCondition}
                  onChange={(event) => setEnterCondition(event.target.value)}
                >
                  {options.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="new-expense__control">
                <label>Is Gear</label>
                <select
                  required
                  value={enteredIsGear}
                  onChange={(event) => setEnteredIsGear(event.target.value)}
                >
                  {gearCheck.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
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
            <div className="new-expense__control">
              <label>Cycle Condition</label>
              <select
                required
                value={enterdCondition}
                onChange={(event) => setEnterCondition(event.target.value)}
              >
                {options.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="new-expense__control">
              <label>Is Gear</label>
              <select
                required
                value={enteredIsGear}
                onChange={(event) => setEnteredIsGear(event.target.value)}
              >
                {gearCheck.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
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
export default CycleDetailsForms;
