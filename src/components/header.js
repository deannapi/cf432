import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo432.jpg";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="row">
              <div className="col header-logo">
                <img src={logo} alt="cf432" id="header-logo" />
              </div>
              <div className="col">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/schedule">Schedule</Link>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
