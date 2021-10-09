import React, { useContext, useState } from "react";

import "./AddAccount.css";

const AddAccount = (props) => {
  const [accountName, setAccountName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [color, setColor] = useState("");

  const accountNameChangeHandler = (event) => {
    setAccountName(event.target.value);
  };
  const accountTypeChangeHandler = (event) => {
    setAccountType(event.target.value);
  };
  const enteredAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const currencyChangeHandler = (event) => {
    setCurrency(event.target.value);
  };

  const colorChangeHandler = (event) => {
    setColor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const addAccountData = {
      accountName: accountName,
      accountType: accountType,
      amount: enteredAmount,
      currency: currency,
      color: color,
    };
    props.onAddAccount(addAccountData);
    setAccountName("");
    setAccountType("");
    setEnteredAmount("");
    setCurrency("");
    setColor("");
  };
  const handleExitAddAcount = () => {
    props.onExit();
  };

  return (
    <div className="add-account-full-page">
      <div className="add-account">
        <nav className="add-account-nav">
          <ul className="add-account-nav-ul">
            <li className="add-account-nav-li">
              <img onClick={handleExitAddAcount} src="/img/x-icon.png" />
            </li>

            <li className="add-account-nav-li">Title</li>
            <li className="add-account-nav-li">
              <a>
                <img onClick={submitHandler} src="/img/check-icon.png" />
              </a>
            </li>
          </ul>
        </nav>
        <form onSubmit={submitHandler}>
          <div className="add-account-form form-group">
            <label>Account name</label>
            <input
              value={accountName}
              onChange={accountNameChangeHandler}
              type="text"
              className="form-control"
            />
          </div>
          <div className="add-account-form form-group">
            <label>Account type</label>
            <div className="add-account-form form-group">
              <select
                value={accountType}
                onChange={accountTypeChangeHandler}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="1">Cash</option>
                <option value="2">Visa</option>
                <option value="3">MasterCard</option>
                <option value="4">Credit Card</option>
              </select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label>Enter the amount</label>
            <input
              value={enteredAmount}
              onChange={enteredAmountChangeHandler}
              type="number"
              className="form-control"
            />
          </div>
          <div className="add-account-form form-group">
            <label>Currency</label>
            <div className="add-account-form form-group">
              <select
                value={color}
                onChange={currencyChangeHandler}
                class="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="1">RON</option>
                <option value="2">EUR</option>
                <option value="3">GBP</option>
                <option value="4">USD</option>
                <option value="5">HUF</option>
              </select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label>Color</label>
            <div className="add-account-form form-group">
              <select
                value={color}
                onChange={colorChangeHandler}
                class="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
