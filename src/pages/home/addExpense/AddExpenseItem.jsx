import React, { useState, useContext, useEffect } from "react";
import { useHistory, withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./AddExpenseItem.css";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import VisibleExpense from "./VisibleExpense";
import Select from "react-select";

const AddExpenseItem = (props) => {
  const history = useHistory();
  const userContext = useContext(UserContext);

  const [selectedCategory, setSelectedCategory] = useState(
    userContext.data?.categories?.find(
      (category) => category.id === history.location?.state?.category
    )
  );

  const [selectedSubcategory, setSelectedSubcategory] = useState(
    selectedCategory?.subcategories?.find(
      (subcategory) => subcategory.id === history.location?.state?.subcategory
    )
  );

  const [enteredCategory, setEnteredCategory] = useState(
    selectedCategory?.name
  );
  const [accountOptions, setAccountOptions] = useState({});
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredAccount, setEnteredAccount] = useState({});
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [enteredDate, setEnteredDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [enteredSubcategory, setEnteredSubcategory] = useState(
    selectedSubcategory?.name
  );
  const [errors, setErrors] = useState({
    categoryError:
      selectedCategory && Object.keys(selectedCategory).length > 0
        ? false
        : true,
    subcategoryError:
      selectedSubcategory && Object.keys(selectedSubcategory).length > 0
        ? false
        : true,
    accountError: true,
    amountError: true,
    dateError: false,
  });

  const categoryOptions = userContext.data.categories.map((category) => {
    return { value: category.id, label: category.name };
  });

  let subcategoryOptions =
    selectedCategory?.subcategories?.map((subcategory) => {
      return { value: subcategory.id, label: subcategory.name };
    }) || null;

  let timer = null;

  useEffect(() => {
    if (show) {
      setTimer();
    }
  }, [show]);

  useEffect(() => {
    setAccountOptions(
      userContext.data.accounts.map((account) => {
        return {
          value: account.id,
          label:
            account.accountType.label +
            " (" +
            userContext?.data?.accountsBalance[account.id] +
            " " +
            account.currency +
            ")",
        };
      })
    );
  }, [userContext]);

  const setTimer = () => {
    if (timer != null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setShow(!show);
      timer = null;
    }, 3000);
  };

  const subcategoryChangeHandler = (option) => {
    setEnteredSubcategory(option);
    setSelectedSubcategory(
      selectedCategory?.subcategories?.find((subcategory) => {
        return subcategory.id === option?.value;
      })
    );

    if (option) {
      setErrors({
        ...errors,
        subcategoryError: false,
      });
    } else {
      setErrors({
        ...errors,
        subcategoryError: true,
      });
    }
  };

  const categoryChangeHandler = (option) => {
    setEnteredCategory(option);
    setSelectedCategory(
      userContext.data?.categories?.find(
        (category) => category.id === option?.value
      )
    );
    subcategoryChangeHandler(null);

    if (option) {
      setErrors({
        ...errors,
        categoryError: false,
      });
    } else {
      setErrors({
        ...errors,
        categoryError: true,
      });
    }
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    if (event.target.value) {
      setErrors({
        ...errors,
        amountError: false,
      });
    } else {
      setErrors({
        ...errors,
        amountError: true,
      });
    }
  };

  const accountChangeHandler = (option) => {
    setEnteredAccount(option);
    const selectedAccountDetails = userContext.data.accounts.filter(
      (account) => account.id === option.value
    );
    setSelectedCurrency(selectedAccountDetails[0]?.currency);

    if (option.label) {
      setErrors({
        ...errors,
        accountError: false,
      });
    } else {
      setErrors({
        ...errors,
        accountError: true,
      });
    }
  };

  const dateChangeHandler = (date) => {
    setEnteredDate(date.value);

    if (date.value) {
      setErrors({
        ...errors,
        dateError: false,
      });
    } else {
      setErrors({
        ...errors,
        dateError: true,
      });
    }
  };

  const submitExpenseHandler = (event) => {
    event.preventDefault();

    const formatDate = { year: "numeric", month: "long", day: "numeric" };
    const expense = {
      expenseCategory: selectedCategory,
      expenseSubcategory: selectedSubcategory,
      amount: enteredAmount,
      curreny: selectedCurrency,
      account: enteredAccount.label,
      date: new Date(enteredDate).toLocaleDateString("en-US", formatDate),
    };

    userContext.data.accountsBalance[enteredAccount.value] =
      Number(userContext.data.accountsBalance[enteredAccount.value]) -
      enteredAmount;

    userContext.methods.addExpense(expense);
    setShow(!show);
    setEnteredCategory("");
    setEnteredSubcategory("");
    setEnteredAmount("");
    setSelectedCurrency("");
    setEnteredAccount("");
    setEnteredDate("");
    setSelectedCategory("");
    setSelectedSubcategory("");
    setErrors({
      categoryError: true,
      subcategoryError: true,
      accountError: true,
      amountError: true,
      dateError: true,
    });
  };

  const clearInputs = () => {
    setEnteredCategory("");
    setEnteredSubcategory("");
    setEnteredAmount("");
    setSelectedCurrency("");
    setEnteredAccount("");
    setEnteredDate("");
    setSelectedCategory("");
    setSelectedSubcategory("");
  };

  const selectColourStyles = {
    control: (base) => {
      return {
        ...base,
        border: "1px solid #ccc",
        boxShadow: "none",
        "&:hover": {
          borderColor: "#86b899",
        },
      };
    },
    option: (styles, { isSelected, isFocused }) => {
      return {
        ...styles,
        color: isSelected ? "#1d3924" : "",
        backgroundColor: isFocused ? "#d7f7e8" : "",
      };
    },
  };

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#f2f7f5" }}>
      <div className="addExpense">
        <form className="add-expense" onSubmit={submitExpenseHandler}>
          <div className="add-expense-value">
            <div className="add-expense-value">
              <label>
                Expense name:{" "}
                <span style={{ color: "red", fontWeight: "lighter" }}>*</span>
              </label>
              <div style={{ width: "100%" }}>
                <Select
                  value={enteredCategory}
                  onChange={categoryChangeHandler}
                  options={categoryOptions}
                  defaultInputValue={enteredCategory}
                  styles={selectColourStyles}
                />

                <Select
                  value={enteredSubcategory}
                  onChange={subcategoryChangeHandler}
                  options={subcategoryOptions}
                  defaultInputValue={enteredSubcategory}
                  styles={selectColourStyles}
                />
              </div>
            </div>
            <div className="add-expense-value">
              <label>
                Account:{" "}
                <span style={{ color: "red", fontWeight: "lighter" }}>*</span>
              </label>
              <Select
                value={enteredAccount}
                onChange={accountChangeHandler}
                options={accountOptions}
                styles={selectColourStyles}
              />
            </div>
            <div className="d-flex">
              <div className="add-expense-value">
                <label>
                  Amount:{" "}
                  <span style={{ color: "red", fontWeight: "lighter" }}>*</span>
                </label>
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  value={Number(enteredAmount).toString()}
                  onChange={amountChangeHandler}
                  style={{ boxShadow: "none", border: "1px solid #ccc" }}
                />
              </div>
              <div className="add-expense-value">
                <div className="add-expense-currency">{selectedCurrency}</div>
              </div>
            </div>

            <div className="add-expense-value">
              <label>
                Date:{" "}
                <span style={{ color: "red", fontWeight: "lighter" }}>*</span>
              </label>
              <div className="add-expense-date">
                <DatePickerComponent
                  cssClass="e-calendar-green"
                  value={enteredDate}
                  format="dd-MMM-yy"
                  placeholder="Select a date"
                  onChange={dateChangeHandler}
                ></DatePickerComponent>
              </div>
            </div>
          </div>

          {Object.keys(errors).find((errorKey) => errors[errorKey]) && (
            <div className="add-account-error-message">
              Please fill in all the required fields !
            </div>
          )}

          <div className="d-flex add-expense-buttons">
            <div className="p-2">
              <button
                onClick={submitExpenseHandler}
                type="submit"
                disabled={Object.keys(errors).find(
                  (errorKey) => errors[errorKey]
                )}
                className={`${
                  Object.keys(errors).find((errorKey) => errors[errorKey])
                    ? "add-expense-disabled-button"
                    : "add-expense-handle-button"
                }`}
              >
                Add Expense
              </button>
            </div>
            <div className="p-2">
              <button
                className="add-expense-handle-button"
                onClick={clearInputs}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>

        {show && <VisibleExpense show={show} />}
      </div>
    </div>
  );
};

export default withRouter(AddExpenseItem);
