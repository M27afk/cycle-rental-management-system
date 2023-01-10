import React, { useEffect, useState } from "react";
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link } from "react-router-dom";

function CycleTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/cycle");
      //  console.log(res.data);
        setContent(res.data);
        //console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchContents();
  }, []);
  const handleDelete = async (id) => {
    try {
      console.log(id)
      await axios.delete("http://localhost:8080/cycle/" + id);
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
            <th>Cycle ID</th>
            <th>Distance Travelled</th>
            <th>Is Gear</th>
            <th>Service Date</th>
            <th>Cycle Condition</th>
            <th>Service ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content) => (
            <tr>
              <td>{content.cycleID}</td>
              <td>{content.distTravelled}</td>
              <td>{content.isGear ? "Yes" : "No"}</td>
              <td>{content.serviceDate}</td>
              <td>{content.cycCondition}</td>
              <td>{content.serviceID}</td>
              <td>
              <div className="buttonContainer">
                <Link to={`/cycle/${content.cycleID}`} state={content}>
                  <button
                    className="edit-delete-buttons"
                    variant="tertiary"
                    size="xs"
                  >
                    Update
                  </button>
                </Link>
                <button
                  className="edit-delete-buttons"
                  variant="tertiary"
                  size="xs"
                  onClick={() => {
                    handleDelete(content.cycleID);
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
  );
}

export default CycleTable;
