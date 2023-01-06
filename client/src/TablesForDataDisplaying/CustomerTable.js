import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";

function CustomerTable() {
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
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/customer" + id);
      window.location.reload();
    } catch {
      console.log(err);
    }
  };
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
                <button
                  className="edit-delete-buttons"
                  variant="tertiary"
                  size="xs"
                >
                  <link to={`/update/${content.custID}`}></link>
                </button>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;
