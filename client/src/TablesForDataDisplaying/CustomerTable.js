import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./TableStyle.css";
// data from "./MockData.json";
import axios from "axios";
import { Link } from "react-router-dom";
import image from "../image/bicycle2.png";
import Navbar from "../Menu/Navbar";
=======
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link } from "react-router-dom";
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680

function CustomerTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/customer");
        //  console.log(res.data);
        setContent(res.data);
        //    console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/customer/" + id);
      console.log("called");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Address</th>
              <th>Subscription Type</th>
              <th>Subscribed On</th>
              <th>Subscribed Upto</th>
              <th>Distance Cycled</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr>
                <td>{content.custID}</td>
                <td>{content.custName}</td>
                <td>{content.custAddress}</td>
                <td>{content.subscriptionType}</td>
                <td>{content.subscribedOn}</td>
                <td>{content.subscribedUpto}</td>
                <td>{content.distCycled}</td>
                <td>
                  <div className="buttonContainer">
                    <Link to={`/customer/${content.custID}`} state={content}>
                      {" "}
                      <button
                        className="edit-delete-buttons"
                        variant="tertiary"
                        size="xs"
                      >
                        Update
                      </button>{" "}
                    </Link>
                    <button
                      className="edit-delete-buttons"
                      variant="tertiary"
                      size="xs"
                      onClick={() => {
                        handleDelete(content.custID);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
=======
    <div className="container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>Subscription Type</th>
            <th>Subscribed On</th>
            <th>Subscribed Upto</th>
            <th>Distance Cycled</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.custID}</td>
              <td>{content.custName}</td>
              <td>{content.custAddress}</td>
              <td>{content.subscriptionType}</td>
              <td>{content.subscribedOn}</td>
              <td>{content.subscribedUpto}</td>
              <td>{content.distCycled}</td>
              <td>
              <div className="buttonContainer">
                <Link to={`/customer/${content.custID}`} state={content}>
                  {" "}
                  <button
                    className="edit-delete-buttons"
                    variant="tertiary"
                    size="xs"
                  >
                    Update
                  </button>{" "}
                </Link>
                <button
                  className="edit-delete-buttons"
                  variant="tertiary"
                  size="xs"
                  onClick={() => {
                    handleDelete(content.custID);
                  }}
                >
                  Delete
                </button>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  );
}

export default CustomerTable;
