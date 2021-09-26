import React, { useState } from "react";
import { withRouter } from "react-router";
import "./LoginForm.css";

const LoginForm = (props) => {
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
        <button type="submit" onClick={submitHandlerClick}>
          LOGIN
        </button>
      </form>
      <p>
        <a href="/">Sign up</a>
      </p>
      <p>
        <a href="/"> Forgot your password?</a>
      </p>
    </div>
  );
};

export default withRouter(LoginForm);
