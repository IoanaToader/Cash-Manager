import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";

import "./AccountsItem.css";
import AddAccount from "./AddAcount";

const AccountsItem = (props) => {
  const userContext = useContext(UserContext);
  const [isAddAccountVisible, setIsAddAccountVisible] = useState(false);

  const toggleAddAccountVisible = () => {
    setIsAddAccountVisible(!isAddAccountVisible);
  };

  const handleAddAccount = (account) => {
    userContext.methods.addAccount(account);
    toggleAddAccountVisible();
  };

  const handleRemoveAccount = (account) => {
    userContext.methods.removeAccount(account);
  };

  return (
    <>
      <div className="accounts-item-full-page">
        <ul className="accounts-item-ul">
          {userContext.data.accounts.length === 0 && (
            <p>No accounts on your list, add some.</p>
          )}
          {userContext.data.accounts.map((account) => {
            return (
              <li
                className="accounts-item-li"
                style={{ backgroundColor: account.color }}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{ padding: "5px" }}
                >
                  <div>
                    <div className="account-type">{account.accountType}:</div>
                    <div className="account-amount-currency">
                      {account.amount}
                      {account.currency}
                    </div>
                  </div>
                  <div className="remove-account">
                    <img
                      onClick={() => handleRemoveAccount(account)}
                      className="account-img"
                      src="/img/delete-icon.png"
                    />
                  </div>
                </div>
              </li>
            );
          })}
          <button
            onClick={toggleAddAccountVisible}
            className="accounts-item-button"
          >
            + Add account
          </button>
        </ul>
      </div>
      <div>
        {isAddAccountVisible && (
          <AddAccount
            onExit={toggleAddAccountVisible}
            onAddAccount={handleAddAccount}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(AccountsItem);
