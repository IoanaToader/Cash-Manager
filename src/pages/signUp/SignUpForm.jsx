import React, { useState } from "react";
import { withRouter } from "react-router";

const SignUpForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandlerClick = (event) => {
    event.preventDefault();
    props.history.push("/");
  };
  return (
    <div className="login_form">
      <form className="login_form_elements">
        <input
          type="text"
          placeholder="Username"
          onChange={usernameHandlerChange}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={passwordHandlerChange}
        ></input>
        <input type="password" placeholder="Confirm Password"></input>
        <input type="text" placeholder="Email"></input>
        <button
          className="login_button"
          type="submit"
          onClick={submitHandlerClick}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
