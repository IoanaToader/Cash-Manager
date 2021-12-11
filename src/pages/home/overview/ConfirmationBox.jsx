import React, { useContext } from "react";
import "./ConfirmationBox.css";
import { UserContext } from "../../../contexts/UserContext";

const ConfirmationBox = (props) => {
  const userContext = useContext(UserContext);

  const expense = props.expense;

  const handleRemoveExpense = () => {
    userContext.methods.removeExpense(expense);
    props.showConfirmationBox();
  };

  const cancelRemoveExpense = () => {
    props.showConfirmationBox();
  };
  return (
    <>
      <div className="confirmationBox-fullPage">
        <div className="confirmationBox-section">
          <div className="confirmationBox-text">
            Are you sure you want to delete this expense?
          </div>
          <div className="confirmationBox-buttons">
            <button onClick={handleRemoveExpense}>Yes</button>
            <button onClick={cancelRemoveExpense}>No</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationBox;
