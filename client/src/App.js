import React from "react";
import Switch from "react-switch";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
import ServiceTable from "./TablesForDataDisplaying/ServiceTable";
import TripDetailTable from "./TablesForDataDisplaying/TripDetailTable";
import UpdateCustomerTable from "./UpdateTables/UpdateCustomerTable";
import UpdateCycleTable from "./UpdateTables/UpdateCycleTable";
import UpdateEmployeeTable from "./UpdateTables/UpdateEmployeeTable";
import UpdateServiceTable from "./UpdateTables/UpdateServiceTable";
import UpdateStationTable from "./UpdateTables/UpdateStationTable";
import UpdateTripDetailTable from "./UpdateTables/UpdateTripDetailTable";

// import Home from "./Home";
import Navbar from "./Menu/Navbar";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/CustomerDetailsForms" component={CustomerDetailsForms} />
        <Route path="/CycleDetailsForms" component={CycleDetailsForms} />
        <Route path="/ServiceStationForms" component={ServiceStationForms} />
        <Route path="/StationDetailsForms" component={StationDetailsForms} />
        <Route path="/EmployeeDetailsForms" component={EmployeeDetailsForms} />
        <Route path="/TripDetailsForms" component={TripDetailsForms} />

        <Route path="/UpdateCustomerTable" component={CustomerTable} />
        <Route path="/UpdateCycleTable" component={CycleTable} />
        <Route path="/UpdateEmployeeTable" component={EmployeeTable} />
        <Route path="/UpdateServiceTable" component={ServiceTable} />
        <Route path="/UpdateStationTable" component={StationTable} />
        <Route path="/UpdateTripDetailTable" component={TripDetailTable} />
      </Switch>
    </Router>
  );
}

export default App;
