import React from "react";
import { withRouter } from "react-router";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="forgot_password">
      <div className="forgot_passwordText">
        <h1>Password Reset</h1>

        <p>
          Forgotten your password? Enter your e-mail address below and we'll
          send you an e-mail allowing you to reset it.
        </p>

        <form>
          <input type="text" placeholder="Email"></input>
          <button className="login_button">Reset my password</button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(ForgotPassword);
