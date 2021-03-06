import React, { Component } from "react";
//import the components we will need
// import AnimalCard from "./SingleAnimalCard";
import ResourceCard from "../reusables/ResourceCard"
import AnimalManager from "../../modules/AnimalManager";

class AnimalList extends Component {
  //define what this component needs to render
  state = {
    animalsInState: [],
  };

  componentDidMount() {
    // console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    AnimalManager.getAll().then((animalsFromAPI) => {
      console.log(animalsFromAPI);
      this.setState({
        animalsInState: animalsFromAPI,
      });
    });
  }

  render() {
    // console.log("ANIMAL LIST: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/animals/new");
            }}
          >
            Admit Animal
          </button>
        </section>

        <div className="container-cards">
          {this.state.animalsInState.map((currentAnimalInLoop) => {
            console.log(
              "this is a current animal in the loop",
              currentAnimalInLoop
            );
            return (
              <ResourceCard
                key={currentAnimalInLoop.id}
                resource={currentAnimalInLoop}
                resourceName="animals"
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default AnimalList;
