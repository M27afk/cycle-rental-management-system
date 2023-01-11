<<<<<<< HEAD
import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

import DropdownCust from "./DropDown/DropdownCust";
import DropdownCyc from "./DropDown/DropdownCyc";
import DropdownSta from "./DropDown/DropdownSta";
import DropdownSer from "./DropDown/DropdownSer";
import DropdownEmp from "./DropDown/DropdownEmp";
import DropdownTri from "./DropDown/DropdownTri";
// import image from "../image/bicycle2.png";
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
=======
  import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
<<<<<<< HEAD
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(true);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };
  const onMouseEnter5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(true);
    }
  };
=======
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
<<<<<<< HEAD
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown1(false);
    } else {
      setDropdown1(false);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };
  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };
  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };
  const onMouseLeave5 = () => {
    if (window.innerWidth < 960) {
      setDropdown5(false);
    } else {
      setDropdown5(false);
    }
  };
=======
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
<<<<<<< HEAD
          Cycle Rental
        </Link>
=======
          E RIDE
          <i class="fab fa-firstdraft" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
<<<<<<< HEAD
              Customer
            </Link>
            {dropdown && <DropdownCust />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Cycle
            </Link>
            {dropdown1 && <DropdownCyc />}
=======
              Customer <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
          </li>

          <li
            className="nav-item"
<<<<<<< HEAD
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Station
            </Link>
            {dropdown2 && <DropdownSta />}
=======
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Cycle <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
          </li>

          <li
            className="nav-item"
<<<<<<< HEAD
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Service
            </Link>
            {dropdown3 && <DropdownSer />}
=======
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Service <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
          </li>

          <li
            className="nav-item"
<<<<<<< HEAD
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Employee
            </Link>
            {dropdown4 && <DropdownEmp />}
=======
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Station <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
          </li>

          <li
            className="nav-item"
<<<<<<< HEAD
            onMouseEnter={onMouseEnter5}
            onMouseLeave={onMouseLeave5}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              TripDetails
            </Link>
            {dropdown5 && <DropdownTri />}
          </li>
        </ul>
=======
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Employee <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              TripDetailsForms <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </ul>
        <Button />
>>>>>>> 8a2e61c7acaf852cd6465de1a1fe48c1917a2680
      </nav>
    </>
  );
}

export default Navbar;
