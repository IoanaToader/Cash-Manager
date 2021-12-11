import React, { useContext } from "react";
import "./AccountConfirmationBox.css";
import { UserContext } from "../../../contexts/UserContext";

const AccountConfirmationBox = (props) => {
  const userContext = useContext(UserContext);

  const account = props.account;

  const handleRemoveAccount = () => {
    userContext.methods.removeAccount(account);
    delete userContext.data.accountsBalance[account.id];
    props.showAccountConfirmationBox();
  };

  const cancelRemoveAccount = () => {
    props.showAccountConfirmationBox();
  };
  return (
    <>
      <div className="account-confirmation-box-full-page">
        <div className="account-confirmation-box-section">
          <div className="account-confirmation-box-text">
            Are you sure you want to delete this account?
          </div>
          <div className="account-confirmation-box-buttons">
            <button onClick={handleRemoveAccount}>Yes</button>
            <button onClick={cancelRemoveAccount}>No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountConfirmationBox;
