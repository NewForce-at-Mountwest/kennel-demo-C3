import React, { Component } from "react";
import "./Kennel.css";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
// import NavBar from "./nav/NavBar"

class Kennel extends Component {

  // All of these start out as false, because when the page loads we DON'T want to show the register form, we DON'T want to show the login form, and we're NOT logged in
  state = {
    showRegisterForm: false,
    showLoginForm: false,
    loggedIn: false,
  };

  render() {
    return (
      <>
        {/* This is what happens when the page loads-- this ternary operator checks to see if ALL of the conditions are false. If they're all false, we show both buttons i.e. the splash page*/}
        {!this.state.showLoginForm &&
        !this.state.showRegisterForm &&
        !this.state.loggedIn ? (
          <>
          {/* When we click on the register button, we change a property in state to true. Every time we change state, render runs again and we check ALL OF THESE CONDITIONS AGAIN */}
          {/* because we changed showRegisterForm to true, when render runs again we won't print this code because the condition on line 20 will not evaluate to true */}
            <button onClick={() => this.setState({ showRegisterForm: true })}>
              Register
            </button>
            <button onClick={() => this.setState({ showLoginForm: true })}>
              Login
            </button>
          </>
        ) : (
          <> </>
        )}

        {/* If this.state.showRegisterForm is true, which only happens if you click on the button, show the register form*/}
        {this.state.showRegisterForm ? (
          <>
            <h2>Register Form Here</h2>
            {/* When they click on the register button, we would normally be updating the db and stuff. But for now we're just changing state. In this case, we're saying that they're logged in-- so now we want them to see App Views and the nav bar. We DON'T want them to see any register or login forms. */}
            <button
              onClick={() =>
                this.setState({
                  loggedIn: true,
                  showLoginForm: false,
                  showRegisterForm: false,
                })
              }
            >
              Submit Registration
            </button>
          </>
        ) : (
          <></>
        )}

        {/* Same as above-- if this.state.showLoginForm is true, we show the login form. This would ONLY be true if we already clicked the login button on the "splash page" */}
        {this.state.showLoginForm ? (
          <>
            <h2>Login Form Here</h2>
            {/* When we click the submit button on the login form, we'd normaly be storing stuff in local storage. But for now, we're just changing state so that it re-renders. This time, we want to show them the splash page and the nav bar. We DON'T want to show them either the login or register form, so we change both of those to false. */}
            <button
              onClick={() =>
                this.setState({
                  loggedIn: true,
                  showLoginForm: false,
                  showRegisterForm: false,
                })
              }
            >
              Submit Login
            </button>
          </>
        ) : (
          <></>
        )}

        {/* If they're logged in, load the nav bar and app views */}
        {this.state.loggedIn ? (
          <>
            <NavBar />
            <ApplicationViews />
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Kennel;
