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
            <th>Cycle ID</th>
            <th>Distance Travelled</th>
            <th>Is Gear</th>
            <th>Service Date</th>
            <th>Cycle Condition</th>
            <th>Service ID</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.cycID}</td>
              <td>{content.distTravelled}</td>
              <td>{content.isGear}</td>
              <td>{content.serviceDate}</td>
              <td>{content.cycCondition}</td>
              <td>{content.serviceID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
