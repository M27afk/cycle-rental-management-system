import React from "react";
import { useState } from "react";
import "./GenralStyles.css";

const options = ["Good", "Bad"];
const gearCheck = ["Yes", "No"];

function CycleDetailsForms() {
  const [enteredDistance, setEnteredDistance] = useState("");
  const distanceChangeHandler = (event) => {
    setEnteredDistance(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredIsGear, setEnteredIsGear] = useState(gearCheck[0]);

  const [enterdCondition, setEnterCondition] = useState(options[0]);
  // const SubscriptionChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setEnterSubscription(Number(event.target.value));

  // };
  const submitHandler = (event) => {
    event.preventDefault();
    const customerData = {
      distance: enteredDistance,
      date: new Date(enteredDate),
      isgear: enteredIsGear,
      condition: enterdCondition,
    };
    console.log(customerData);
    setEnteredDistance("");
    setEnteredDate("");

    setEnterCondition("");
  };
  return (
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

            <div className="new-expense__control">
              <label>Distance Travelled </label>
              <input
                type="number"
                placeholder="Enter distance travelled"
                onChange={distanceChangeHandler}
                value={enteredDistance}
                required
              ></input>
            </div>

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
  );
}
export default CycleDetailsForms;
