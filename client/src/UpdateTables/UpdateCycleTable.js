import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const options = ["Good", "Modrate", "Poor"];
const isGearOption = ["yes", "No"];

function UpdateCycleTable() {
  const [cycleUpdatedData, setUpdatedData] = useState({
    distTravelled: "",
    isGear: [isGearOption[0]],
    ServiceDate: "",
    CycCondition: [options[0]],
  });

  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const cycID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(cycleUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(cycleUpdatedData);
      await axios.put(
        `http://localhost:8080/customer/${cycID}`,
        cycleUpdatedData
      );
      console.log("Axios called");
      navigate("/cycle");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Cycle Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Distance Travelled</label>
              <input
                type="number"
                placeholder="Enter dist travelled"
                onChange={handleChange}
                name="distTravelled"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Service Date</label>
              <input
                type="date"
                onChange={handleChange}
                name="ServiceDate"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Cycle Condition</label>
              <select
                name="CycCondition"
                onChange={(event) => setUpdatedData(event.target.value)}
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
                name="isGear"
                onChange={(event) => setUpdatedData(event.target.value)}
              >
                {isGearOption.map((value) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={handleSubmit}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCycleTable;
