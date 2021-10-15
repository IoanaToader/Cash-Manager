import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./AddExpenseItem.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import VisibleExpense from "./VisibleExpense";

const AddExpenseItem = (props) => {
  const userContext = useContext(UserContext);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (date) => {
    setEnteredDate(date);
    console.log(date);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();

    const expense = {
      expenseTitle: enteredTitle,
      amount: enteredAmount,
      account: "",
      date: new Date(enteredDate),
    };
    userContext.methods.addExpense(expense);
    setShow(!show);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f2f7f5" }}>
      <form className="add-expense" onSubmit={submitExpenseHandler}>
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
            <div>
              <DatePickerComponent
                value={enteredDate}
                dateFormat="dd-MMM-yy"
                placeholder="Select a date"
                onChange={dateChangeHandler}
              ></DatePickerComponent>
            </div>
          </div>
        </div>
        <div className="add-expense-buttons">
          <button onClick={submitExpenseHandler} type="submit">
            Add Expense
          </button>
          <button>Cancel</button>
        </div>
      </form>

      {show && (
        <VisibleExpense
          delay={2}
          show={show}
          children={
            userContext.data &&
            userContext.data.expenses &&
            userContext.data.expenses.map((expense) => {
              return (
                <li className="overviewItem-li">
                  <div date={expense.date}></div>

                  <div>
                    <h2>{expense.expenseTitle}</h2>
                    <div>${expense.amount}</div>
                  </div>
                </li>
              );
            })
          }
        />
      )}
    </div>
  );
};

export default withRouter(AddExpenseItem);
