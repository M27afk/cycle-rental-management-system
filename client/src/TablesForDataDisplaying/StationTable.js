import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";

function StationTable() {
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
            <th>Station ID</th>
            <th>Station Name</th>
            <th>Station Address</th>
            <th>Cycle Capacity</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.stnID}</td>
              <td>{content.stnName}</td>
              <td>{content.stnAddress}</td>
              <td>{content.cycCapacity}</td>
              <td>{content.empID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StationTable;
