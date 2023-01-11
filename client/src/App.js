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
import ServiceTable from "./TablesForDataDisplaying/ServiceTable";
import UpdateCustomerTable from "./UpdateTables/UpdateCustomerTable";
<<<<<<< HEAD
import UpdateCycleTable from "./UpdateTables/UpdateCycleTable";
import UpdateEmployeeTable from "./UpdateTables/UpdateEmployeeTable";
import UpdateServiceTable from "./UpdateTables/UpdateServiceTable";
import UpdateStationTable from "./UpdateTables/UpdateStationTable";
import UpdateTripDetailTable from "./UpdateTables/UpdateTripDetailTable";
import TripDetailTable from "./TablesForDataDisplaying/TripDetailTable";
=======
import UpdateCycleTable from "./UpdateTables/UpdateCycleTable"
import UpdateEmployeeTable from "./UpdateTables/UpdateEmployeeTable"
import UpdateServiceTable from "./UpdateTables/UpdateServiceTable"
import UpdateStationTable from "./UpdateTables/UpdateStationTable"
import UpdateTripDetailTable from "./UpdateTables/UpdateTripDetailTable"
import TripDetailTable from "./TablesForDataDisplaying/TripDetailTable"
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
import Home from "./Home";
import View from "./report/view";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/" element={<Home />} />

=======
      <Route path="/" element={<Home />} />
      <Route path="/viewpdf" element={<View />} />
>>>>>>> 7dee4df4d604797f5a1dc83f627dbb95b14dc0e5
=======
      <Route path="/" element={<Home />} />
      <Route path="/viewpdf" element={<View />} />
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
        <Route path="/customer" element={<CustomerTable />} />
        <Route path="/addcustomer" element={<CustomerDetailsForms />} />
        <Route path="/customer/:id" element={<UpdateCustomerTable />} />

        <Route path="/cycle" element={<CycleTable />} />
        <Route path="/addcycle" element={<CycleDetailsForms />} />
        <Route path="/cycle/:id" element={<UpdateCycleTable />} />

        <Route path="/employee" element={<EmployeeTable />} />
        <Route path="/addemployee" element={<EmployeeDetailsForms />} />
        <Route path="/employee/:id" element={<UpdateEmployeeTable />} />

        <Route path="/tripdetails" element={<TripDetailTable />} />
        <Route path="/addtripdetails" element={<TripDetailsForms />} />
        <Route path="/tripdetails/:id" element={<UpdateTripDetailTable />} />

        <Route path="/station" element={<StationTable />} />
        <Route path="/addstation" element={<StationDetailsForms />} />
        <Route path="/station/:id" element={<UpdateStationTable />} />

        <Route path="/service" element={<ServiceTable />} />
        <Route path="/addservice" element={<ServiceStationForms />} />
        <Route path="/service/:id" element={<UpdateServiceTable />} />

        <Route path="/stationview" element={<StationTable />} />

      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
