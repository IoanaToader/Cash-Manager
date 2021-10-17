import React, { useEffect, useState, useContext } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { UserContext } from "../../../contexts/UserContext";

const VisibleExpense = ({ delay, show }) => {
  const userContext = useContext(UserContext);

  const [visible, setVisible] = useState(!show);

  let timer = null;

  useEffect(() => {
    setTimer();
  }, [show]);

  const setTimer = () => {
    if (timer != null) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setVisible(!visible);
      timer = null;
    }, delay);
  };

  const expense =
    userContext.data.expenses[userContext.data.expenses.length - 1];

  const handleRemoveExpense = (expense) => {
    userContext.methods.removeExpense(expense);
  };

  return (
    visible && (
      <>
        <FadeIn>
          <li className="overviewItem-li">
            <div date={expense.date}></div>

            <div>
              <h2>{expense.expenseTitle}</h2>
              <div>${expense.amount}</div>
              <div onClick={() => handleRemoveExpense(expense)}>x</div>
            </div>
          </li>
        </FadeIn>
      </>
    )
  );
};

export default VisibleExpense;
