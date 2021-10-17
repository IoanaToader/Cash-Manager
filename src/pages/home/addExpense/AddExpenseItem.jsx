import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./AddExpenseItem.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import VisibleExpense from "./VisibleExpense";
import Select from "react-select";

const AddExpenseItem = (props) => {
  const userContext = useContext(UserContext);
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [enteredSubcategory, setEnteredSubcategory] = useState("");

  const subcategoryOptions = [
    {
      categoryName: "foodAndDrinks",
      subcategories: [
        { value: "dailyFood", label: "Daily Food" },
        { value: "coffeShop", label: "Coffe Shoop" },
        { value: "restaurant", label: "Restaurant" },
      ],
    },
    {
      categoryName: "shopping",
      subcategories: [
        { value: "petShop", label: "Pet Shop" },
        { value: "gifts", label: "Gifts" },
        { value: "jewelry", label: "Jewelry" },
        { value: "healthAndBeauty", label: "Health and Beauty" },
      ],
    },
    {
      categoryName: "household",
      subcategories: [
        { value: "rent", label: "Rent" },
        { value: "mortgage", label: "Mortgage" },
      ],
    },
  ];

  let timer = null;
  console.log(props);

  useEffect(() => {
    if (show) {
      setTimer();
    }
  }, [show]);

  const setTimer = () => {
    if (timer != null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShow(!show);
      timer = null;
    }, 3000);
  };

  const categoryChangeHandler = (option) => {
    setEnteredCategory(option);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (date) => {
    setEnteredDate(date.value);
  };
  const subcategoryChangeHandler = (option) => {
    setEnteredSubcategory(option);
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();

    const expense = {
      expenseCategory: enteredCategory.value,

      amount: enteredAmount,
      account: "",
      date: new Date(enteredDate),
    };
    console.log(typeof enteredCategory);
    userContext.methods.addExpense(expense);
    setShow(!show);
    setEnteredCategory("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  const categoryOptions = [
    { value: "foodAndDrinks", label: "Food and Drinks" },
    { value: "shopping", label: "Shopping" },
    { value: "household", label: "Household" },
    { value: "transportation", label: "Transportation" },
    { value: "car", label: "Car" },
    { value: "lifeAndEntertainment", label: "Life and Entertainment" },
    { value: "hardwarePC", label: "Hardware, PC" },
    { value: "due", label: "Due" },
    { value: "investment", label: "Investment" },
    { value: "income", label: "Income" },
  ];

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f2f7f5" }}>
      <form className="add-expense" onSubmit={submitExpenseHandler}>
        <div className="add-expense-value">
          <div className="add-expense-value">
            <label>Expense name:</label>

            <Select
              value={enteredCategory}
              onChange={categoryChangeHandler}
              options={categoryOptions}
            />

            <Select
              value={enteredSubcategory}
              onChange={subcategoryChangeHandler}
              options={
                subcategoryOptions?.find(
                  (value) => value.categoryName === enteredCategory.value
                )?.subcategories ?? []
              }
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
            <div className="add-expense-date">
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

      {show && <VisibleExpense show={show} />}
    </div>
  );
};

export default withRouter(AddExpenseItem);
