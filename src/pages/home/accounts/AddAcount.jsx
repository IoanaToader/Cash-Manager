import React, { useContext, useState } from "react";

import "./AddAccount.css";

const AddAccount = (props) => {
  const [accountType, setAccountType] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [color, setColor] = useState("");

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
      accountType: accountType,
      amount: enteredAmount,
      currency: currency,
      color: color,
    };
    props.onAddAccount(addAccountData);

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
            <label>Account type: *</label>
            <div className="add-account-form form-group">
              <select
                value={accountType}
                onChange={accountTypeChangeHandler}
                className="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="Cash">Cash</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Credit Card">Credit Card</option>
              </select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label>Enter the amount: *</label>
            <input
              value={enteredAmount}
              onChange={enteredAmountChangeHandler}
              type="number"
              className="form-control"
            />
          </div>
          <div className="add-account-form form-group">
            <label>Currency: *</label>
            <div className="add-account-form form-group">
              <select
                value={currency}
                onChange={currencyChangeHandler}
                class="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option selected>Choose...</option>
                <option value="RON">RON</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="USD">USD</option>
                <option value="HUF">HUF</option>
              </select>
            </div>
          </div>
          <div className="add-account-form form-group">
            <label>Color: *</label>
            <div className="add-account-form form-group">
              <select
                value={color}
                style={{ backgroundColor: color }}
                onChange={colorChangeHandler}
                class="custom-select mr-sm-2"
                id="inlineFormCustomSelect"
              >
                <option
                  value="#86db94"
                  style={{ backgroundColor: "#86db94" }}
                ></option>

                <option
                  value="#f5c542"
                  style={{ backgroundColor: "#f5c542" }}
                ></option>
                <option
                  value="#f58b3b"
                  style={{ backgroundColor: "#f58b3b" }}
                ></option>
                <option
                  value="#098227"
                  style={{ backgroundColor: "#098227" }}
                ></option>
                <option
                  value="#618bed"
                  style={{ backgroundColor: "#618bed" }}
                ></option>
                <option
                  value="#b767f0"
                  style={{ backgroundColor: "#b767f0" }}
                ></option>
                <option
                  value="#f26b5a"
                  style={{ backgroundColor: "#f26b5a" }}
                ></option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
