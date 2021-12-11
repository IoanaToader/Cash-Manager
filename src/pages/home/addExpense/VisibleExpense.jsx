import React, { useEffect, useState, useContext } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { UserContext } from "../../../contexts/UserContext";
import "./VisibleExpense.css";

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
    userContext.data?.expenses[userContext.data?.expenses.length - 1];

  return (
    visible && (
      <>
        <FadeIn>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <li className="visible-expense-item">
              {expense !== null &&
              expense !== undefined &&
              Object.keys(expense) ? (
                <>
                  <div
                    style={{
                      width: "-webkit-fill-available",
                      textAlign: "center",
                    }}
                  >
                    <div>{expense?.expenseCategory?.name}</div>
                    <div style={{ marginTop: "-5px", fontSize: "15px" }}>
                      ({expense?.expenseSubcategory?.name})
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
                      {" "}
                      <span>{expense?.amount}</span>
                      <span> {expense?.curreny}</span>
                    </div>
                  </div>
                </>
              ) : (
                "It's not working !"
              )}
            </li>
          </div>
        </FadeIn>
      </>
    )
  );
};

export default VisibleExpense;
