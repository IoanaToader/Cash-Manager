import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import "./SignUpForm.css";

const SignUpForm = (props) => {
  const userContext = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    usernameError: "",
    passwordError: "",
    confirmPasswordError: "",
    emailError: "",
  });

  const usernameHandlerChange = (event) => {
    setUsername(event.target.value);
    if (event.target.value === "") {
      setErrors({
        ...errors,
        usernameError: "You must enter a valid username!",
      });
    } else {
      setErrors({
        ...errors,
        usernameError: "",
      });
    }
  };

  const passwordHandlerChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value === "") {
      setErrors({
        ...errors,
        passwordError: "You must enter a valid password!",
      });
    } else {
      setErrors({
        ...errors,
        passwordError: "",
      });
    }
  };

  const confirmPasswordHandlerChange = (event) => {
    setConfirmPassword(event.target.value);

    if (event.target.value !== password) {
      setErrors({
        ...errors,
        confirmPasswordError: "The password confirmation does not match!",
      });
    } else {
      setErrors({
        ...errors,
        confirmPasswordError: "",
      });
    }
  };

  const emailHandlerChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setErrors({
        ...errors,
        emailError: "You must enter a valid email!",
      });
    } else {
      setErrors({
        ...errors,
        emailError: "",
      });
    }
  };

  const submitHandlerClick = (event) => {
    event.preventDefault();
    if (
      username &&
      password &&
      confirmPassword &&
      email &&
      password === confirmPassword
    ) {
      userContext.methods.signUp(username, password, confirmPassword, email);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
    } else {
      let newErrors = {
        ...errors,
      };

      if (username === "") {
        newErrors.usernameError = "You must enter a valid username!";
      }
      if (password === "") {
        newErrors.passwordError = "You must enter a valid password!";

        if (password !== confirmPassword) {
          newErrors.confirmPasswordError =
            "The password confirmation does not match!";
        }
        if (email === "") {
          newErrors.emailError = "You must enter a valid email!";
        }
        setErrors(newErrors);
      }
    }
    setErrors("");
  };

  return (
    <div className="login_form">
      <form className="login_form_elements">
        <input
          value={username}
          type="text"
          placeholder="Username"
          onChange={usernameHandlerChange}
        ></input>

        {errors.usernameError && (
          <div className="error-message">{errors.usernameError}</div>
        )}

        {/* {userContext.data.signUpUsernameErrorMessage && (
          <div>{userContext.data.signUpUsernameErrorMessage}</div>
        )} */}

        <input
          value={password}
          type="password"
          placeholder="Enter a password"
          onChange={passwordHandlerChange}
        ></input>

        {errors.passwordError && (
          <div className="error-message">{errors.passwordError}</div>
        )}

        <input
          value={confirmPassword}
          type="password"
          placeholder="Confirm Password"
          onChange={confirmPasswordHandlerChange}
        ></input>

        {errors.confirmPasswordError && (
          <div className="error-message">{errors.confirmPasswordError}</div>
        )}

        <input
          value={email}
          type="email"
          placeholder="Email"
          onChange={emailHandlerChange}
        ></input>

        {errors.emailError && (
          <div className="error-message">{errors.emailError}</div>
        )}
        {/* {userContext.data.signUpEmailErrorMessage && (
          <div>{userContext.data.signUpEmailErrorMessage}</div>
        )} */}

        <button
          className="login_button"
          type="submit"
          onClick={submitHandlerClick}
        >
          SIGN UP
        </button>
        <button className="login_button">
          <a className="login-sign-in" href="login">
            SIGN IN
          </a>
        </button>
      </form>
    </div>
  );
};
export default withRouter(SignUpForm);
