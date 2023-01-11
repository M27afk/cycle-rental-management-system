import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./TableStyle.css";
// data from "./MockData.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Menu/Navbar";
function ServiceTable() {
  const [contents, setContent] = useState([]);
  const navigate = useNavigate();
=======
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ServiceTable() {
  const [contents, setContent] = useState([]);
  const navigate=useNavigate()
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/service");
<<<<<<< HEAD
        if (res.data.errno) alert(res.data.sqlMessage);
=======
        if(res.data.errno)
        alert (res.data.sqlMessage)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
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
      await axios.delete("http://localhost:8080/service/" + id);
<<<<<<< HEAD
      navigate("/service");
=======
      navigate("/service")
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
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
              <th>Service ID</th>
              <th>Employee ID</th>
              <th>Due Date</th>
              <th>Spare Parts Count</th>
              <th>Cycle ID</th>
              <th>Actions</th>
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
                <td>
                  <div className="buttonContainer">
                    <Link to={`/service/${content.serviceID}`} state={content}>
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
                        handleDelete(content.serviceID);
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
            <th>Service ID</th>
            <th>Employee ID</th>
            <th>Due Date</th>
            <th>Spare Parts Count</th>
            <th>Cycle ID</th>
            <th>Actions</th>
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
              <td>
              <div className="buttonContainer">
                <Link to={`/service/${content.serviceID}`} state={content}>
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
                    handleDelete(content.serviceID);

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

export default ServiceTable;
