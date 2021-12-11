import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import ConfirmationBox from "./ConfirmationBox";

import OverviewChart from "./OverviewChart";

import "./OverviewItem.css";

const OverviewItem = (props) => {
  const userContext = useContext(UserContext);
  const [displayConfirmation, setDisplayConfirmation] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState({});
  const [noData, setNoData] = useState(true);

  const expenses = userContext.data.expenses;

  const showConfirmationBox = () => {
    setDisplayConfirmation(!displayConfirmation);
  };

  const setConfirmationBoxAttributes = (expense) => {
    setSelectedExpense(expense);
    showConfirmationBox();
  };
  const displayMoreExpenses = () => {
    userContext.methods.displayMoreExpenses();
  };

  const displayLessExpenses = () => {
    userContext.methods.displayLessExpenses();
  };

  let isMoreButtonDisabled =
    expenses.length <= 3 ||
    expenses.length === userContext.data.displayedExpenses.length;

  let isLessButtonDisabled = userContext.data.displayedExpenses.length <= 3;

  useEffect(() => {
    setNoData(userContext.data?.displayedExpenses?.length === 0);
  }, [userContext]);

  return (
    <>
      <div className="overviewItem-full-page">
        <div className="overviewItem-expense">
          {noData && (
            <div style={{ textAlign: "-webkit-center", paddingTop: "1rem" }}>
              <p className="overviewItem-addExpensesMessage">
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
                  No expenses on your list, add some.
                </span>
              </p>
            </div>
          )}
          {userContext.data?.displayedExpenses.map((expense, idx) => {
            return (
              <div>
                <div className="overviewItem-mobile">
                  <div
                    key={idx}
                    className="overviewItem-li"
                    onClick={() => setConfirmationBoxAttributes(expense)}
                  >
                    <div style={{ alignSelf: "center" }}>
                      <img
                        className="overviewItem-img"
                        src={expense.expenseSubcategory?.image}
                        style={{
                          backgroundColor:
                            expense.expenseSubcategory?.backgroundColor,
                        }}
                        alt="subcategory icon"
                      />
                    </div>

                    <div style={{ width: "-webkit-fill-available" }}>
                      <div>{expense.expenseCategory?.name}</div>
                      <div style={{ marginTop: "-5px", fontSize: "15px" }}>
                        ({expense.expenseSubcategory?.name})
                      </div>
                    </div>

                    <div
                      style={{
                        alignSelf: "center",
                        width: "-webkit-fill-available",
                        textAlignLast: "end",
                      }}
                    >
                      <div>
                        <span>{expense.amount}</span>
                        <span> {expense.curreny}</span>
                      </div>

                      <div style={{ fontSize: "12px" }}>{expense.date}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ textAlign: "center" }}>
            <div className="overviewItem-mobile">
              <button
                className={`overviewItem-toggleButton ${
                  isMoreButtonDisabled
                    ? "overviewItem-disabledButton"
                    : "overviewItem-enabledButton"
                }`}
                disabled={isMoreButtonDisabled}
                onClick={displayMoreExpenses}
              >
                More expenses
              </button>

              <button
                className={`overviewItem-toggleButton ${
                  isLessButtonDisabled
                    ? "overviewItem-disabledButton"
                    : "overviewItem-enabledButton"
                }`}
                disabled={isLessButtonDisabled}
                onClick={displayLessExpenses}
              >
                Less expenses
              </button>
            </div>
          </div>

          <div className="overviewItem-date">
            <OverviewChart />
          </div>
        </div>
      </div>
      {displayConfirmation && (
        <ConfirmationBox
          showConfirmationBox={showConfirmationBox}
          expense={selectedExpense}
        />
      )}
    </>
  );
};

export default withRouter(OverviewItem);
