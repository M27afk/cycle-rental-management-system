import React from "react";
import { Link } from "react-router-dom";
export default function Home () { return(
    <div>
        <Link to="/station">Station</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/service">Service</Link>
        <Link to="/cycle">Cycle</Link>
        <Link to="/customer">Customer</Link>
        <Link to="/tripdetails">Trip Details</Link>


    </div>
  ) }