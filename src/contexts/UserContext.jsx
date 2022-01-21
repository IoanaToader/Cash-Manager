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
    accountTypes: {
      cash: "Cash",
      visa: "Visa",
      masterCard: "MasterCard",
      creditCard: "Credit card",
    },
    accountsBalance: {},
    accountCurrency: {
      RON: "RON",
      EUR: "EUR",
      GBP: "GBP",
      USD: "USD",
      HUF: "HUF",
    },
    accountBackgroundColors: [
      "#35635b",
      "#35635b",
      "#529471",
      "#a3cd9e",
      "#555273",
      "#65799b",
      "#b6d5e1",
    ],
    expenses: [],
    numberOfDisplayedExpenses: 3,
    displayedExpenses: [],
    subcategories: [],
    categories: [
      {
        id: "1",
        name: "Food and Drinks",
        image: "/img/categories/food-icon.png",
        backgroundColor: "#eb4034",
        subcategories: [
          {
            id: "1",
            name: "Daily Food",
            image: "/img/categories/dailyFood.png",
            backgroundColor: "#eb4034",
          },
          {
            id: "2",
            name: "Coffee Shop",
            image: "/img/categories/coffe.png",
            backgroundColor: "#eb4034",
          },
          {
            id: "3",
            name: "Restaurant",
            image: "/img/categories/restaurant.png",
            backgroundColor: "#eb4034",
          },
        ],
      },
      {
        id: "2",
        name: "Shopping",
        image: "/img/categories/shopping-icon.png",
        backgroundColor: "#349feb",
        subcategories: [
          {
            id: "1",
            name: "Pet Shop",
            image: "/img/categories/pet.png",
            backgroundColor: "#349feb",
          },
          {
            id: "2",
            name: "Gifts",
            image: "/img/categories/gift.png",
            backgroundColor: "#349feb",
          },
          {
            id: "3",
            name: "Jewelry",
            image: "/img/categories/jewelry.png",
            backgroundColor: "#349feb",
          },
          {
            id: "4",
            name: "Health and Beauty",
            image: "/img/categories/beauty.png",
            backgroundColor: "#349feb",
          },
        ],
      },
      {
        id: "3",
        name: "Household",
        image: "/img/categories/home-icon.png",
        backgroundColor: "#eb8f34",
        subcategories: [
          {
            id: "1",
            name: "Rent",
            image: "/img/categories/rent.png",
            backgroundColor: "#eb8f34",
          },
          {
            id: "2",
            name: "Home Insurance",
            image: "/img/categories/homeinsurance.png",
            backgroundColor: "#eb8f34",
          },
          {
            id: "3",
            name: "Mortgage",
            image: "/img/categories/mortgage.png",
            backgroundColor: "#eb8f34",
          },
          {
            id: "4",
            name: "Utility",
            image: "/img/categories/utility.png",
            backgroundColor: "#eb8f34",
          },
          {
            id: "5",
            name: "Maintenance",
            image: "/img/categories/maintenance.png",
            backgroundColor: "#eb8f34",
          },
        ],
      },
      {
        id: "4",
        name: "Transportation",
        image: "/img/categories/transportation-icon.png",
        backgroundColor: "#f2532c",
        subcategories: [
          {
            id: "1",
            name: "Public Transportation",
            image: "/img/categories/transportation-icon.png",
            backgroundColor: "#f2532c",
          },
          {
            id: "2",
            name: "Taxi",
            image: "/img/categories/taxi.png",
            backgroundColor: "#f2532c",
          },
          {
            id: "3",
            name: "Airline Flights ",
            image: "/img/categories/airline.png",
            backgroundColor: "#f2532c",
          },
        ],
      },
      {
        id: "5",
        name: "Car",
        image: "/img/categories/transportation-icon.png",
        backgroundColor: "#a444db",
        subcategories: [
          {
            id: "1",
            name: "Car Insurance",
            image: "/img/categories/carinsurance.png",
            backgroundColor: "#a444db",
          },
          {
            id: "2",
            name: "Fuel",
            image: "/img/categories/fuel.png",
            backgroundColor: "#a444db",
          },
          {
            id: "3",
            name: "Parking",
            image: "/img/categories/parking.png",
            backgroundColor: "#a444db",
          },
          {
            id: "4",
            name: "Maintenance",
            image: "/img/categories/maintenance.png",
            backgroundColor: "#a444db",
          },
        ],
      },
      {
        id: "6",
        name: "Life and Entertainment",
        image: "/img/categories/food-icon.png",
        backgroundColor: "#64c920",
        subcategories: [
          {
            id: "1",
            name: "Fitness",
            image: "/img/categories/fitness.png",
            backgroundColor: "#64c920",
          },
          {
            id: "2",
            name: "Alcohol, tobacco",
            image: "/img/categories/alcohol.png",
            backgroundColor: "#64c920",
          },
          {
            id: "3",
            name: "Books",
            image: "/img/categories/books.png",
            backgroundColor: "#64c920",
          },
          {
            id: "4",
            name: "Education",
            image: "/img/categories/education.png",
            backgroundColor: "#64c920",
          },
          {
            id: "5",
            name: "Special Events",
            image: "/img/categories/special.png",
            backgroundColor: "#64c920",
          },
          {
            id: "6",
            name: "Hobby",
            image: "/img/categories/hobby.png",
            backgroundColor: "#64c920",
          },
          {
            id: "7",
            name: "Health",
            image: "/img/categories/health.png",
            backgroundColor: "#64c920",
          },
          {
            id: "8",
            name: "Trips, Holidays",
            image: "/img/categories/trips.png",
            backgroundColor: "#64c920",
          },
        ],
      },
      {
        id: "7",
        name: "Hardware, PC",
        image: "/img/categories/pc-icon.png",
        backgroundColor: "#2f72ba",
        subcategories: [
          {
            id: "1",
            name: "Telephone",
            image: "/img/categories/telephone.png",
            backgroundColor: "#2f72ba",
          },
          {
            id: "2",
            name: "Internet",
            image: "/img/categories/internet.png",
            backgroundColor: "#2f72ba",
          },
          {
            id: "3",
            name: "Software, games",
            image: "/img/categories/games.png",
            backgroundColor: "#2f72ba",
          },
        ],
      },
      {
        id: "8",
        name: "Due",
        image: "/img/categories/due-icon.png",
        backgroundColor: "#2aad7b",
        subcategories: [
          {
            id: "1",
            name: "Fine",
            image: "/img/categories/due-icon.png",
            backgroundColor: "#2aad7b",
          },
          {
            id: "2",
            name: "Tax",
            image: "/img/categories/due-icon.png",
            backgroundColor: "#2aad7b",
          },
          {
            id: "3",
            name: "Liability",
            image: "/img/categories/due-icon.png",
            backgroundColor: "#2aad7b",
          },
        ],
      },
      {
        id: "9",
        name: "Investment",
        image: "/img/categories/investment-icon.png",
        backgroundColor: "#f562ae",
        subcategories: [
          {
            id: "1",
            name: "Savings",
            image: "/img/categories/investment-icon.png",
            backgroundColor: "#f562ae",
          },
        ],
      },
    ],
  });

  //--------------------------Asa salvam datele cand dam refresh la pagina---------------
  useEffect(() => {
    if (
      value &&
      (Object.keys(value.userDetails || {}).length > 0 ||
        (value.accounts && value.accounts.length > 0))
    ) {
      saveData();
    }
  }, [value]);

  useEffect(() => {
    let oldData = readData();
    oldData = JSON.parse(oldData);

    setValue({ ...value, ...oldData });
  }, []);

  //------------------------------LOGIN---------------------------------------
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
        history.push("/login");
      })
      .catch((error) => {
        setValue({
          ...value,
          // signUpUsernameErrorMessage: "Username is already taken!",
          // signUpEmailErrorMessage: "Email is already taken!",
        });
      });
  };
  //--------------------------END LOGIN-----------------------------------

  const addAccount = (account) => {
    setValue({ ...value, accounts: [...value.accounts, account] });
  };

  const removeAccount = (account) => {
    const newAccounts = value.accounts;
    const indexOfAccount = newAccounts.indexOf(account);

    if (indexOfAccount > -1) {
      newAccounts.splice(indexOfAccount, 1);
      setValue({ ...value, accounts: newAccounts.slice(0) });
    }
  };

  const addExpense = (expense) => {
    const allExpenses = [...value.expenses, expense];

    if (allExpenses.length < 3) {
      setValue({
        ...value,
        expenses: allExpenses,
        numberOfDisplayedExpenses: allExpenses.length,
        displayedExpenses: getExpensesToDisplay(
          allExpenses,
          allExpenses.length
        ),
      });
    } else {
      setValue({
        ...value,
        expenses: allExpenses,
        numberOfDisplayedExpenses: 3,
        displayedExpenses: getExpensesToDisplay(allExpenses, 3),
      });
    }
  };

  const removeExpense = (expense) => {
    const expenses = value.expenses;
    const indexOfExpense = expenses.findIndex(
      (currentExpense) =>
        JSON.stringify(currentExpense) === JSON.stringify(expense)
    );

    if (indexOfExpense > -1) {
      expenses.splice(indexOfExpense, 1);

      if (expenses.length < 3) {
        setValue({
          ...value,
          expenses: expenses.slice(0),
          numberOfDisplayedExpenses: expenses.length,
          displayedExpenses: getExpensesToDisplay(expenses, expenses.length),
        });
      } else {
        setValue({
          ...value,
          expenses: expenses.slice(0),
          numberOfDisplayedExpenses: 3,
          displayedExpenses: getExpensesToDisplay(expenses, 3),
        });
      }
    }
  };

  //---------------------Aici ne salvam datele-----------------------------
  const saveData = () => {
    localStorage.setItem("contextData", JSON.stringify(value));
  };
  //---------------------Aici citim datele pe care le-am salvat mai sus-----
  const readData = () => {
    return localStorage.getItem("contextData");
  };

  const onCategorySelect = (subcategories) => {
    setValue({ ...value, subcategories: subcategories });
  };

  const displayMoreExpenses = () => {
    if (value.numberOfDisplayedExpenses + 3 > value.expenses.length) {
      setValue({
        ...value,
        numberOfDisplayedExpenses: value.expenses.length,
        displayedExpenses: getExpensesToDisplay(
          value.expenses,
          value.expenses.length
        ),
      });
    } else {
      setValue({
        ...value,
        numberOfDisplayedExpenses: value.numberOfDisplayedExpenses + 3,
        displayedExpenses: getExpensesToDisplay(
          value.expenses,
          value.numberOfDisplayedExpenses + 3
        ),
      });
    }
  };

  const displayLessExpenses = () => {
    if (value.numberOfDisplayedExpenses - 3 >= 3) {
      setValue({
        ...value,
        numberOfDisplayedExpenses: value.numberOfDisplayedExpenses - 3,
        displayedExpenses: getExpensesToDisplay(
          value.expenses,
          value.numberOfDisplayedExpenses - 3
        ),
      });
    } else {
      setValue({
        ...value,
        numberOfDisplayedExpenses: 3,
        displayedExpenses: getExpensesToDisplay(value.expenses, 3),
      });
    }
  };

  const getExpensesToDisplay = (expenses, newnumberOfDisplayedExpenses) => {
    const newLowerLimit = expenses.length - newnumberOfDisplayedExpenses;
    const newUpperLimit = expenses.length;
    if (newLowerLimit < 0) {
      return expenses?.slice(0, newUpperLimit);
    } else {
      return expenses?.slice(newLowerLimit, newUpperLimit);
    }
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
          addExpense,
          removeExpense,
          onCategorySelect,
          displayMoreExpenses,
          displayLessExpenses,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
