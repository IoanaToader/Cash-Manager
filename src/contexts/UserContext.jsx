import React, { useState, createContext, useEffect } from "react";
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
    accounts: [],
    mobileClick: false,
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

  const addAccount = (account) => {
    setValue({ ...value, accounts: [...value.accounts, account] });
  };

  const removeAccount = (account) => {
    const newAccounts = value.accounts;

    const indexOfAccount = newAccounts.indexOf(account);

    if (indexOfAccount > -1) {
      newAccounts.splice(indexOfAccount, 1);
      setValue({ ...value, accounts: newAccounts });
    }
  };

  const toggleMobileNavbar = () => {
    setValue(!value);
  };
  return (
    <UserContext.Provider
      value={{
        data: value,
        methods: {
          login,
          signUp,
          addAccount,
          removeAccount,
          toggleMobileNavbar,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
