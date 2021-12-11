import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import "./accounts/AccountsItem.css";

const DisplayedAccounts = (props) => {
  const userContext = useContext(UserContext);
  const [accounts, setAccounts] = useState([]);

  const [action, setAction] = useState("");

  useEffect(() => {
    setAccounts(
      userContext?.data?.accounts.map((account) => {
        account.name = userContext.data.accountTypes[account.accountType.value];
        return account;
      })
    );
  }, [userContext.data.accounts]);

  return (
    <>
      <div>
        <ul className="accounts-item-ul row" style={{ margin: "auto" }}>
          {userContext.data.accounts &&
            userContext.data.accounts.length === 0 && (
              <div
                style={{ textAlign: "-webkit-center", paddingTop: "1rem" }}
              ></div>
            )}
          {accounts.map((account) => {
            return (
              <div key={account.id} className="col-6">
                <li
                  className="accounts-item-li "
                  style={{ backgroundColor: account.color }}
                >
                  <div
                    className="d-flex justify-content-between"
                    style={{ padding: "5px" }}
                  >
                    <div style={{ width: "80%" }}>
                      <div className="account-type">{account.name}:</div>
                      <div
                        className="account-amount-currency"
                        style={{ fontSize: "15px" }}
                      >
                        <span style={{ marginRight: "5px" }}>
                          {userContext.data.accountsBalance[account.id]}
                        </span>
                        <span>{account.currency}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default DisplayedAccounts;
