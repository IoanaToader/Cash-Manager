import React, { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./ToggleAmount.css";

const ToggleAmount = (props) => {
  const userContext = useContext(UserContext);
  const [enteredNewAmount, setEnteredNewAmount] = useState("");
  const [action, setAction] = useState(props.action);

  const account = props.account;

  const newAmountHandler = (event) => {
    setEnteredNewAmount(event.target.value);
  };

  const handleAmount = () => {
    console.log(Number(account.amount) + Number(enteredNewAmount));

    if (action === "add") {
      account.amount = Number(account.amount) + Number(enteredNewAmount);
      userContext.data.accountsBalance[account.id] =
        Number(userContext.data.accountsBalance[account.id]) +
        Number(enteredNewAmount);
    } else {
      account.amount = Number(account.amount) - Number(enteredNewAmount);
      userContext.data.accountsBalance[account.id] =
        Number(userContext.data.accountsBalance[account.id]) -
        Number(enteredNewAmount);
    }

    props.toggleAmount();
  };

  const cancelAmount = () => {
    props.toggleAmount();
  };

  return (
    <>
      <div className="toggle-amount-full-page">
        <div className="toggle-amount-section">
          <div className="toggle-account-amount-text">
            {action == "add" ? "Increase" : "Decrease"} the amount
          </div>
          <div style={{ textAlign: "start" }}>
            <input
              value={enteredNewAmount}
              onChange={newAmountHandler}
              className="toggle-amount-text-input"
              type="number"
              placeholder={
                action == "add"
                  ? "Increase the balance with..."
                  : "Decrease the balance with..."
              }
            />
          </div>
          <div className="toggle-amount-buttons">
            <button onClick={handleAmount}>
              {action == "add" ? "Add" : "Remove"}
            </button>
            <button onClick={cancelAmount}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleAmount;
