import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import "./LoginForm.css";

const LoginForm = (props) => {
  const userContext = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandlerChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
  };

  const submitHandlerClick = (event) => {
    event.preventDefault();
    userContext.methods.login(email, password);
  };
  return (
    <div className="login_form">
      <form className="login_form_elements">
        <input
          className={`${
            userContext.data.loginErrorMessage ? "input-error" : ""
          }`}
          value={email}
          type="email"
          placeholder="Email"
          onChange={emailHandlerChange}
        ></input>
        <input
          className={`${
            userContext.data.loginErrorMessage ? "input-error" : ""
          }`}
          value={password}
          type="password"
          placeholder="Password"
          onChange={passwordHandlerChange}
        ></input>
        <button
          className="login_button"
          type="submit"
          onClick={submitHandlerClick}
        >
          LOGIN
        </button>
      </form>

      {userContext.data.loginErrorMessage !== "" && (
        <div className="error-message">
          {userContext.data.loginErrorMessage}
        </div>
      )}
      <p>
        <a href="/sign-up">Sign up</a>
      </p>
      <p>
        <a href="/forgot-password"> Forgot your password?</a>
      </p>
    </div>
  );
};

export default withRouter(LoginForm);
