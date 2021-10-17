import React, { useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./OverviewItem.css";
// import DoughnutChart from "./DoughnutChart";

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
                <div>{expense.date}</div>

                <div>
                  <h2>{expense.expenseCategory}</h2>
                  <div>${expense.amount}</div>
                </div>
              </li>
            );
          })}
      </div>
      {/* <DoughnutChart /> */}
    </div>
  );
};

export default withRouter(OverviewItem);
