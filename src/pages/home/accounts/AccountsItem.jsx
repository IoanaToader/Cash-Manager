import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import AccountConfirmationBox from "./AccountConfirmationBox";
import "./AccountsItem.css";
import AddAccount from "./AddAcount";
import IncreaseAmount from "./ToggleAmount";

const AccountsItem = (props) => {
  const userContext = useContext(UserContext);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState({});
  const [isAddAccountVisible, setIsAddAccountVisible] = useState(false);
  const [displayAccountConfirmation, setDisplayAccountConfirmation] =
    useState(false);
  const [displayToggleAmount, setDisplayToggleAmount] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {
    setAccounts(
      userContext?.data?.accounts.map((account) => {
        account.name = userContext.data.accountTypes[account.accountType.value];
        return account;
      })
    );
  }, [userContext.data.accounts]);

  const toggleAddAccountVisible = () => {
    setIsAddAccountVisible(!isAddAccountVisible);
  };

  const showAccountConfirmationBox = () => {
    setDisplayAccountConfirmation(!displayAccountConfirmation);
  };

  const accountConfirmationBoxAttributes = (account) => {
    setSelectedAccount(account);
    showAccountConfirmationBox();
  };

  const toggleAmount = (account, action) => {
    setAction(action);
    setSelectedAccount(account);
    setDisplayToggleAmount(!displayToggleAmount);
  };

  const handleAddAccount = (account) => {
    userContext.methods.addAccount(account);
    toggleAddAccountVisible();
  };

  return (
    <>
      <div className="accounts-item-full-page">
        <div className="accounts-item-mobile">
          <ul className="accounts-item-ul row" style={{ margin: "auto" }}>
            {userContext.data.accounts &&
              userContext.data.accounts.length === 0 && (
                <div
                  style={{ textAlign: "-webkit-center", paddingTop: "1rem" }}
                >
                  <p className="accounts-item-addAccountMessage">
                    <img
                      src="/img/warning.png"
                      style={{
                        backgroundColor: "red",
                        padding: "0",
                        borderRadius: "50px",
                        width: "2rem",
                      }}
                    />
                    <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                      No accounts on your list, add some.
                    </span>
                  </p>
                </div>
              )}
            {accounts.map((account) => {
              return (
                <div key={account.id.toString()} className="col-6">
                  <li
                    className="accounts-item-li"
                    style={{ backgroundColor: account.color }}
                  >
                    <div
                      className="d-flex justify-content-between"
                      style={{ padding: "5px" }}
                    >
                      <div
                        onClick={() =>
                          accountConfirmationBoxAttributes(account)
                        }
                        style={{ width: "80%" }}
                      >
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
                      <div className="modify-account">
                        <div onClick={() => toggleAmount(account, "add")}>
                          <img src="/img/add.png" />
                        </div>
                        <div onClick={() => toggleAmount(account, "remove")}>
                          <img src="/img/remove.png" />
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}{" "}
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={toggleAddAccountVisible}
            className="accounts-item-button"
          >
            + Add account
          </button>
        </div>
      </div>
      <div>
        {isAddAccountVisible && (
          <AddAccount
            toggleAddAccountVisible={toggleAddAccountVisible}
            onAddAccount={handleAddAccount}
          />
        )}
      </div>
      <div>
        {displayAccountConfirmation && (
          <AccountConfirmationBox
            showAccountConfirmationBox={showAccountConfirmationBox}
            account={selectedAccount}
          />
        )}
      </div>
      <div>
        {displayToggleAmount && (
          <IncreaseAmount
            toggleAmount={() => toggleAmount()}
            account={selectedAccount}
            action={action}
          />
        )}
      </div>
    </>
  );
};

export default withRouter(AccountsItem);
