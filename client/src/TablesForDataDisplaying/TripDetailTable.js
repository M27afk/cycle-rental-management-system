import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";

function Table() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/");
        console.log(res.data);
        setContent(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
