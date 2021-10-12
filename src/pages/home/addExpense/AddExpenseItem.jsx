import React, { useState } from "react";
import { withRouter } from "react-router";
import "./AddExpenseItem.css";

const AddExpenseItem = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f2f7f5" }}>
      <form className="add-expense">
        <div className="add-expense-value">
          <div className="add-expense-value">
            <label>Title:</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="add-expense-value">
            <label>Amount:</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="add-expense-value">
            <label>Account:</label>
            <select>
              <option>aici punem contul disponibil</option>
            </select>
          </div>
          <div className="add-expense-value">
            <label>Date:</label>
            <input
              type="date"
              min="2019-01-01"
              max="2030-12-01"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="add-expense-buttons">
          <button type="submit">Add Expense</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(AddExpenseItem);
