import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import "./TableStyle.css";
// data from "./MockData.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Menu/Navbar";
=======
import "./style.css";
// data from "./MockData.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
function StationTable() {
  const [contents, setContent] = useState([]);
  useEffect(() => {
    const fetchContents = async () => {
      try {
        const res = await axios.get("http://localhost:8080/station");
        //console.log(res.data);
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
      const res = await axios.delete("http://localhost:8080/station/" + id);
      if (res.data.errno) alert(res.data.sqlMessage);
=======
      const res=await axios.delete("http://localhost:8080/station/" + id);
      if(res.data.errno)
      alert (res.data.sqlMessage)
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  // const handleUpdate = async (content) => {
<<<<<<< HEAD

=======
   
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
  // <Link to={`/station/${content.stnID}`} state={content}> </Link>

  //   // try {
  //   //   await axios.delete("http://localhost:8080/station/" + id);
  //   //   console.log("called");
  //   //   window.location.reload();
  //   // } catch (err) {
  //   //   console.log(err);
  //   // }
  // };
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <div className="container">
        <table className="content-table">
          <thead>
            <tr>
              <th>Station ID</th>
              <th>Station Name</th>
              <th>Station Address</th>
              <th>Cycle Capacity</th>
              <th>Employee ID</th>
              <th>Actions</th>
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
                <td>
                  {
                    /* <Link to={`/station/${content.stnID}`}> */
                    // ce.log(content)
                  }
                  <div className="buttonContainer">
                    <Link to={`/station/${content.stnID}`} state={content}>
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
                        handleDelete(content.stnID);
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
            <th>Station ID</th>
            <th>Station Name</th>
            <th>Station Address</th>
            <th>Cycle Capacity</th>
            <th>Employee ID</th>
            <th>Actions</th>
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
              <td>
                {/* <Link to={`/station/${content.stnID}`}> */
               // ce.log(content)
                }
                <div className="buttonContainer">
                <Link to={`/station/${content.stnID}`} state={content}> 
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
                    handleDelete(content.stnID);
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

export default StationTable;
