import React, { Component } from "react";
import "./Kennel.css";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews"
// import NavBar from "./nav/NavBar"

class Kennel extends Component {
    // kennelName= "Student Kennels"

  render() {
      console.log("We are in the render method")
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>

    );
  }
}

export default Kennel;
