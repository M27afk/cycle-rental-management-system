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
            <th>Service ID</th>
            <th>Employee ID</th>
            <th>Due Date</th>
            <th>Spare Parts Count</th>
            <th>Cycle ID</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.serviceID}</td>
              <td>{content.empID}</td>
              <td>{content.dueDate}</td>
              <td>{content.sparePartsCount}</td>
              <td>{content.cycID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
