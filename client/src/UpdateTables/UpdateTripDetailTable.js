import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

function UpdateTripDetailTable() {
  const [tripUpdatedData, setUpdatedData] = useState({
    stnID_start: "",
    stnID_end: "",
    distTravelled: "",
    beginTime: "",
    endTime: "",
  });

  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const tripID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(tripUpdatedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(tripUpdatedData);
      await axios.put(
        `http://localhost:8080/tripdetails/${tripID}`,
        tripUpdatedData
      );
      console.log("Axios called");
      navigate("/tripdetails");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="new-expense">
        <div className="login-header">
          <header className="titles">Customer Details Updation Form</header>
          {/* <img src="img/trin.png" alt="trin trin logo" className="trin-img" /> */}
        </div>

        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Station ID start</label>
              <input
                type="number"
                placeholder="Enter the distance Travelled"
                onChange={handleChange}
                name="stnID_start"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Station ID end</label>
              <input
                type="number"
                placeholder="Enter the distance Travelled"
                onChange={handleChange}
                name="stnID_end"
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Distance Travelled</label>
              <input
                type="number"
                placeholder="Enter the distance Travelled"
                onChange={handleChange}
                name="distTravelled"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Begin Time</label>
              <input
                type="time"
                onChange={handleChange}
                name="beginTime"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>End Time</label>
              <input type="time" onChange={handleChange} name="endTime"></input>
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

export default UpdateTripDetailTable;
