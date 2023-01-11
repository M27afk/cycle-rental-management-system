import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Menu/Navbar";
import LandingPage from "./LandingPages/LandingPage";
import CustomerDetailsForms from "./Components/CustomerDetailsForms";
export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
    </div>
  );
}
