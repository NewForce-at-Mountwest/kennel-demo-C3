import React, { Component } from "react";
//import the components we will need
// import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";
import ResourceCard from "../reusables/ResourceCard"

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employeesInState: [],
  };

  componentDidMount() {
    // console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    EmployeeManager.getAll().then((employeesFromAPI) => {
      console.log(employeesFromAPI);
      this.setState({
        employeesInState: employeesFromAPI,
      });
    });
  }

  render() {
    return (
      <>
        <div className="container-cards">
          {this.state.employeesInState.map((currentEmployeeInLoop) => {
            return (
              <ResourceCard
                key={currentEmployeeInLoop.id}
                resource={currentEmployeeInLoop}
                resourceName="employees"
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default EmployeeList;
