import React from "react";
import logo from "../images/logo432.jpg";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home">
          <img src={logo} alt="cf432" id="main_logo" />
        </div>
      </>
    );
  }
}
