import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";

const UserContext = createContext();
const UserContextProvider = (props) => {
  const history = useHistory();

  const [value, setValue] = useState({
    userDetails: {},
    loginErrorMessage: "",
    signUpUsernameErrorMessage: "",
    signUpEmailErrorMessage: "",
  });

  const login = (email, password) => {
    const dataSignIn = {
      user: {
        email: email,
        password: password,
      },
    };

    axios
      .post("http://localhost:4000/api/users/login", dataSignIn)
      .then((response) => {
        localStorage.setItem("token", response.data.user.token);
        setValue({
          ...value,
          userDetails: response.data.user,
        });
        history.push("/");
      })
      .catch((error) => {
        setValue({
          ...value,
          loginErrorMessage: "Email or password is invalid!",
        });
      });
  };

  const signUp = (username, password, confirmPassword, email) => {
    const dataSignUp = {
      user: {
        username: username,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
      },
    };

    axios
      .post("http://localhost:4000/api/users", dataSignUp)
      .then((response) => {
        localStorage.setItem("token", response.data.user.token);
        setValue({
          ...value,
          userDetails: response.data.user,
        });
      })
      .catch((error) => {
        setValue({
          ...value,
          signUpUsernameErrorMessage: "Username is already taken!",
          signUpEmailErrorMessage: "Email is already taken!",
        });
      });
  };

  return (
    <UserContext.Provider
      value={{
        data: value,
        methods: { login, signUp },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
