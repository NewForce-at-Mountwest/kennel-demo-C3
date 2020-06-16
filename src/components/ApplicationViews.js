import React, { Component } from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import Login from "./auth/Login";
import { Route, withRouter, Redirect } from "react-router-dom";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import EmployeeList from "./employee/EmployeeList"
//only include these once they are built - previous practice exercise
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'

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

        <Route
          exact path="/employees"
          render={(props) => {
            return <EmployeeList{...props} />;
          }}
        />
      </>
    );
  }
}

export default ApplicationViews;
