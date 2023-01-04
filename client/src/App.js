import React from "react";
import "./App.css";
import CustomerDetailsForms from "./Components/CustomerDetailsForms";
import CycleDetailsForms from "./Components/CycleDetailsForms";
import EmployeeDetailsForms from "./Components/EmployeeDetailsForms";
import ServiceStationForms from "./Components/ServiceStationForms";
import StationDetailsForms from "./Components/StationDetailsForms";
import TripDetailsForms from "./Components/TripDetatailsForms";
import Table from "./TablesForDataDisplaying/Table";
function App() {
  return (
    <div>
      {/* <CustomerDetailsForms></CustomerDetailsForms>
      <CycleDetailsForms></CycleDetailsForms>
      <EmployeeDetailsForms></EmployeeDetailsForms>
      <ServiceStationForms></ServiceStationForms>
      <StationDetailsForms></StationDetailsForms>
      <TripDetailsForms></TripDetailsForms> */}

      <Table></Table>
    </div>
  );
}

export default App;
