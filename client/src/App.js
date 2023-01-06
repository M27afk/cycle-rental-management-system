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
import CustomerTable from "./TablesForDataDisplaying/CustomerTable";
import CycleTable from "./TablesForDataDisplaying/CycleTable";
import EmployeeTable from "./TablesForDataDisplaying/EmployeeTable";
import StationTable from "./TablesForDataDisplaying/StationTable";
import ServiceTable from "./TablesForDataDisplaying/ServiceTable"
import UpdateCustomerTable from "./UpdateTables/UpdateCustomerTable";
import TripDetailTable from "./TablesForDataDisplaying/TripDetailTable";
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/customer" element={< CustomerTable />} />
    <Route path="/addcustomer" element={< CustomerDetailsForms />} />
    <Route path="/customer/:id" element={< UpdateCustomerTable />} />

    <Route path="/cycle" element={< CycleTable />} />
    <Route path="/station" element={< StationTable />} />
    <Route path="/employee" element={< EmployeeTable />} />
    <Route path="/service" element={< ServiceTable />} />
    <Route path="/tripdetails" element={< TripDetailTable />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
