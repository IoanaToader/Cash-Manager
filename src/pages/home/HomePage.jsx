import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import DisplayedAccounts from "./DisplayedAccounts";
import HomeChart from "./HomeChart";
import "./HomePage.css";

const HomePage = () => {
  const userContext = useContext(UserContext);
  const [noData, setNoData] = useState(true);

  useEffect(() => {
    setNoData(userContext.data?.displayedExpenses?.length === 0);
  }, [userContext]);

  return (
    <div className="main-home-page">
      <div
        className="home-displayed-accounts"
        style={{ backgroundColor: "#f2f7f5", paddingBottom: "1px" }}
      >
        <DisplayedAccounts />
      </div>
      <div style={{ backgroundColor: "#f2f7f5", paddingBottom: "10rem" }}>
        {noData ? (
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
        ) : (
          <HomeChart />
        )}
      </div>
    </div>
  );
};

export default withRouter(HomePage);
