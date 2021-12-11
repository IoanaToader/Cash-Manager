import React, { useContext, useState } from "react";
import Select from "react-select";
import { UserContext } from "../../../contexts/UserContext";

import "./AddAccount.css";

const AddAccount = (props) => {
  const userContext = useContext(UserContext);
  const [selectedAccountType, setSelectedAccountType] = useState({});
  const [enteredAmount, setEnteredAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState({});
  const [color, setColor] = useState("");

  const [accountTypes, setAccountTypes] = useState(
    Object.keys(userContext?.data?.accountTypes).map((accountValue) => {
      return {
        value: accountValue,
        label: userContext?.data?.accountTypes[accountValue],
      };
    })
  );
  const [accountCurrency, setAccountCurrency] = useState(
    Object.keys(userContext?.data?.accountCurrency).map((accountCurrency) => {
      return {
        value: accountCurrency,
        label: userContext?.data?.accountCurrency[accountCurrency],
      };
    })
  );
  const [accountBackgroundColors, setAccountBackgroundColors] = useState(
    userContext?.data?.accountBackgroundColors.map((accountBackgroundColor) => {
      return {
        value: accountBackgroundColor,
        label: "",
      };
    })
  );

  const [errors, setErrors] = useState({
    accountError: true,
    amountError: true,
    currencyError: true,
    colorError: true,
  });

  const selectColourStyles = {
    control: (base) => {
      return {
        ...base,
        border: "1px solid #ccc",
        boxShadow: "none",
        "&:hover": {
          borderColor: "#86b899",
        },
      };
    },
    option: (styles, { isSelected, isFocused }) => {
      return {
        ...styles,
        color: isSelected ? "#1d3924" : "",
        backgroundColor: isFocused ? "#d7f7e8" : "",
      };
    },
  };

  const colourStyles = {
    control: (base) => {
      return {
        ...base,
        border: "1px solid #ccc",
        "&:hover": {
          borderColor: "#86b899",
        },
        boxShadow: "none",
        backgroundColor: color,
      };
    },
    option: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.value,
        height: 30,
      };
    },
  };

  const accountTypeChangeHandler = (option) => {
    setSelectedAccountType(option);

    if (option.value) {
      setErrors({
        ...errors,
        accountError: false,
      });
    } else {
      setErrors({
        ...errors,
        accountError: true,
      });
    }
  };

  const enteredAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    if (event.target.value) {
      setErrors({
        ...errors,
        amountError: false,
      });
    } else {
      setErrors({
        ...errors,
        amountError: true,
      });
    }
  };
  const currencyChangeHandler = (option) => {
    setSelectedCurrency(option);

    if (option.value) {
      setErrors({ ...errors, currencyError: false });
    } else {
      setErrors({ ...errors, currencyError: true });
    }
  };

  const colorChangeHandler = (option) => {
    setColor(option.value);
    if (option.value) {
      setErrors({ ...errors, colorError: false });
    } else {
      setErrors({ ...errors, colorError: true });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const addAccountData = {
      id:
        userContext?.data?.accounts[userContext.data.accounts.length - 1]?.id +
          1 || 1,
      accountType: selectedAccountType,
      amount: enteredAmount,
      currency: selectedCurrency.value,
      color: color,
    };

    userContext.data.accountsBalance[addAccountData.id] = enteredAmount;
    props.onAddAccount(addAccountData);

    setSelectedAccountType("");
    setEnteredAmount("");
    setSelectedCurrency("");
    setColor("");
  };

  const handleExitAddAcount = () => {
    props.toggleAddAccountVisible();
  };

  return (
    <div className="add-account-full-page">
      <div className="add-account">
        <form onSubmit={submitHandler} style={{ padding: "1rem" }}>
          <div className="add-account-form form-group">
            <label className="add-account-label">
              Account type:<span style={{ color: "red" }}> *</span>
            </label>
            <div className="form-group">
              <Select
                value={selectedAccountType}
                options={accountTypes}
                styles={selectColourStyles}
                onChange={accountTypeChangeHandler}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                placeholder="Cash"
              ></Select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label className="add-account-label">
              Enter the amount:
              <span style={{ color: "red" }}> *</span>
            </label>
            <div>
              <input
                value={enteredAmount}
                onChange={enteredAmountChangeHandler}
                type="number"
                step="0.1"
                min="0"
                max="10000000"
                className="form-control"
                placeholder="1.00"
                style={{ boxShadow: "none", border: "1px solid #ccc" }}
              />
            </div>
          </div>
          <div className="add-account-form form-group">
            <label className="add-account-label">
              Currency:
              <span style={{ color: "red" }}> *</span>
            </label>
            <div className=" form-group">
              <Select
                value={selectedCurrency}
                options={accountCurrency}
                styles={selectColourStyles}
                onChange={currencyChangeHandler}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                placeholder="RON"
              ></Select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label className="add-account-label">
              Color:
              <span style={{ color: "red" }}> *</span>
            </label>
            <div className="form-group">
              <Select
                value={color}
                options={accountBackgroundColors}
                styles={colourStyles}
                onChange={colorChangeHandler}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
                placeholder=""
              ></Select>
            </div>
          </div>

          {Object.keys(errors).find((errorKey) => errors[errorKey]) && (
            <div className="add-account-error-message">
              Please fill in all the required fields !
            </div>
          )}

          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            <button
              className={`${
                Object.keys(errors).find((errorKey) => errors[errorKey])
                  ? "add-account-disabled-button"
                  : "account-handle-button"
              }`}
              onClick={submitHandler}
              style={{ marginRight: "1rem" }}
              disabled={Object.keys(errors).find(
                (errorKey) => errors[errorKey]
              )}
            >
              Add Account
            </button>
            <button
              className="account-handle-button "
              onClick={handleExitAddAcount}
              style={{ marginLeft: "1rem" }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
