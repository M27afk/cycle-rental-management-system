import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./TableStyle.css";
// data from "./MockData.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Menu/Navbar";
=======
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link } from "react-router-dom";

>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
function CycleTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/cycle");
<<<<<<< HEAD
        //  console.log(res.data);
        if (res.data.errno) alert(res.data.sqlMessage);

=======
      //  console.log(res.data);
      if(res.data.errno)
      alert (res.data.sqlMessage)
      
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
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
<<<<<<< HEAD
      console.log(id);
=======
      console.log(id)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
      await axios.delete("http://localhost:8080/cycle/" + id);
      console.log("called");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
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
    </>
=======
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
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  );
}

export default CycleTable;
