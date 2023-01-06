import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomerDetailsForms from "./Components/CustomerDetailsForms";
import CycleDetailsForms from "./Components/CycleDetailsForms";
import EmployeeDetailsForms from "./Components/EmployeeDetailsForms";
import ServiceStationForms from "./Components/ServiceStationForms";
import StationDetailsForms from "./Components/StationDetailsForms";
import TripDetailsForms from "./Components/TripDetailsForms";
// import Table from "./TablesForDataDisplaying/StationTable";

import UpdateCustomerTable from "./UpdateTables/UpdateCustomerTable";
function App() {
  return (
    <div>
      <UpdateCustomerTable />
    </div>
  );
}

export default App;
