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
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Customer Address</th>
            <th>subscription type</th>
            <th>subscribed On</th>
            <th>subscribedUpto</th>
            <th>distCycled</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
