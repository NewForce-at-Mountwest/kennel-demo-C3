import React, { Component } from "react";
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            Name:{" "}
            <span className="card-petname">{this.props.resource.name}</span>
          </h3>
          <Link to={`/${resourceName}/${this.props.resource.id}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
