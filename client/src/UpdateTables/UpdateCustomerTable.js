import React from "react";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const options = ["Basic", "Premium"];
function UpdateCustomerTable() {
  const [custUpdatedData, setUpdatedData] = useState({
    custName: "",
    subscribedOn: "",
    custAddress: "",
    subscriptionType: [options[0]],
    distCycled: "",
  });

  const [error, setError] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const custID = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setUpdatedData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(custUpdatedData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     console.log(custUpdatedData)
      await axios.put(`http://localhost:8080/customer/${custID}`, custUpdatedData);
      console.log("Axios called")
      navigate("/customer")
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
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="custName"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Subscribed On</label>
              <input
                type="date"
                onChange={handleChange}
                name="subscribedOn"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Subscription Type</label>
              <select
                name="subscriptionType"
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
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                onChange={handleChange}
                name="custAddress"
              ></input>
            </div>

            <div className="new-expense__control">
              <label>Distance Travelled</label>
              <input
                type="number"
                placeholder="Enter the distance Travelled"
                onChange={handleChange}
                name="distCycled"
              ></input>
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

export default UpdateCustomerTable;
