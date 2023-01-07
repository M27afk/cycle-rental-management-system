import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";

function TripDetailTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/tripdetails");
        console.log(res.data);
        setContent(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/tripdetails/" + id);
      console.log("called");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Trip ID</th>
            <th>Customer ID</th>
            <th>Cycle ID</th>
            <th>Staion ID start</th>
            <th>Staion ID start</th>
            <th>Distance Travelled</th>
            <th>BeginTime</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.tripID}</td>
              <td>{content.custID}</td>
              <td>{content.cycID}</td>
              <td>{content.stnID_start}</td>
              <td>{content.stnID_end}</td>
              <td>{content.distTravelled}</td>
              <td>{content.beginTime}</td>
              <td>{content.endTime}</td>
              <td>
                <Link to={`/tripdetails/${content.tripID}`}>
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
                    handleDelete(content.tripID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TripDetailTable;
