import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./OverviewItem.css";

const OverviewItem = (props) => {
  const userContext = useContext(UserContext);

  return (
    <div className="overviewItem-full-page">
      <div className="overviewItem-expense">
        {userContext.data &&
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
          })}
      </div>
    </div>
  );
};

export default withRouter(OverviewItem);
