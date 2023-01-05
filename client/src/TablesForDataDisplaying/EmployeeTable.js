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
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Employee Address</th>
            <th>Date of Birth</th>
            <th>Staion ID</th>
            <th>Service ID</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.empID}</td>
              <td>{content.empName}</td>
              <td>{content.empAddress}</td>
              <td>{content.dob}</td>
              <td>{content.stnID}</td>
              <td>{content.servID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
