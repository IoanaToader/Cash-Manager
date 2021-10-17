import React from "react";
import { withRouter } from "react-router";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="login">
      <div className="login_app">
        <h1>Sign Up</h1>
        <ul>
          <li>
            <a href="http://www.Facebook.com/" target="_blank" rel="noreferrer">
              <img src="/img/logo/logo_facebook.png" alt="facebook logo" />
              LOGIN WITH FACEBOOK
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/img/logo/logo_google.png" alt="google logo" />
              LOGIN WITH GOOGLE
            </a>
          </li>
          <li>
            <a href="https://www.icloud.com/" target="_blank" rel="noreferrer">
              <img src="/img/logo/logo_apple.png" alt="apple logo" />
              LOGIN WITH APPLE
            </a>
          </li>
        </ul>
        <p id="login_paragraph">We will never post without your permission.</p>
        <p>OR</p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default withRouter(SignUp);
