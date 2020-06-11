import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import Login from "./auth/Login";
import { Route, withRouter, Redirect } from "react-router-dom";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'

// User clicks on edit button
// Building an edit form
// fetch call to db to GET the values of the animal that they clicked on
// When the data comes back, set it to state
// Edit form should have pre-populated values from database
// For should have a button that says "submit" or whatevs
// fetch call --> PUT (send user values to the form)

class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;

  // isAuthenticated = function(){
  //   if(localStorage.getItem("credentials") !== null){
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  render() {
    return (
      <>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/taco"
          render={(props) => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals/:animalId(\d+)"
          render={(props) => {
            console.log("this is props from application views", props);
            return (
              <AnimalDetail animalId={props.match.params.animalId} {...props} />
            );
          }}
        />

        <Route
          path="/animals/new"
          render={(props) => {
            return <AnimalForm {...props} />;
          }}
        />

        <Route
          path="/animals/:animalId(\d+)/edit"
          render={(props) => {
            return <AnimalEditForm {...props} />;
          }}
        />

        <Route path="/login" component={Login} />

        <Route
          path="/employees/:employeeId(\d+)"
          render={(props) => {
            return <EmployeeWithAnimals {...props} />;
          }}
        />
      </>
    );
  }
}

export default ApplicationViews;
