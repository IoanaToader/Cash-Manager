import React, { useContext, useState } from "react";
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

  return (
    <>
      <div className="accounts-item-full-page">
        <nav className=" navbar navbar-expand-lg" id="home-navbar">
          <div className="container-fluid">
            {/* ----------------Navigation for mobile--------------------- */}
            <div id="hamburger-meniu-icon">
              <img src="/img/phone img/hamburger-meniu.png" />
            </div>

            {/* --------------------------------------------------- */}

            <a className="navbar-brand" id="navbar-admin" href="#">
              <img id="navbar-logo" src="/img/logo/logo_piggy.png" />
            </a>

            {/* ----------------Navigation for mobile--------------------- */}

            <div id="add-expense">
              <img src="/img/phone img/add-expense.png" />
            </div>

            {/* --------------------------------------------------- */}

            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                id="navbar-ul "
              ></ul>
            </div>
          </div>
        </nav>

        <ul className="accounts-item-ul">
          <li className="accounts-item-li">Cash 231</li>
          <li className="accounts-item-li">Card 512</li>

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
