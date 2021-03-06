import React from "react";

import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login">
      <div className="login_app">
        <h1>Login</h1>
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
      <LoginForm />
    </div>
  );
};

export default Login;
