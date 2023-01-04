import React, { useState } from "react";
import "./style.css";
import data from "./MockData.json";
function Table() {
  const [contents, setContent] = useState(data);
  return (
    <div className="container">
      <table className="content-table">
        <thead>
          <tr>
            <th>Station ID</th>
            <th>Station Name</th>
            <th>Station Address</th>
            <th>Cycle Cpacity</th>
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

export default Table;
