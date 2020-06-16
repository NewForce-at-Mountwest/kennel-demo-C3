import React, { Component } from "react";
import { Link } from "react-router-dom";

class ResourceCard extends Component {
  render() {
    return (
      <div
        className={`card-body ${
          this.props.resourceName === "animals" ? "animal-card" : ""
        } `}
      >
        <div className="card-content">
          <h4>
            Name:
            <span className="card-petname">{this.props.resource.name}</span>
          </h4>
          {/* This is a ternary operator! If the resource has a breed, we'll display it. If not, we'll print an empty string (and display nothing) */}
          {this.props.resource.breed ? (
            <p>Breed: {this.props.resource.breed}</p>
          ) : (
            ""
          )}

          <Link to={`/${this.props.resourceName}/${this.props.resource.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResourceCard;
