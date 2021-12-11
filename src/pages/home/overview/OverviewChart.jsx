import React, { useState, useContext, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { UserContext } from "../../../contexts/UserContext";
import "./OverviewChart.css";

const OverviewChart = (props) => {
  const userContext = useContext(UserContext);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const displayedExpenses = userContext.data?.displayedExpenses;

  useEffect(() => {
    const categoryLabels = displayedExpenses.map(
      (expense) => expense.expenseCategory?.name
    );

    const colorLabels = displayedExpenses.map(
      (expense) => expense.expenseCategory?.backgroundColor
    );

    let amountsPerCategory = {};
    displayedExpenses.forEach((expense) => {
      if (amountsPerCategory[expense.expenseCategory?.name]) {
        amountsPerCategory[expense.expenseCategory?.name] += Number(
          expense.amount
        );
      } else {
        amountsPerCategory[expense.expenseCategory?.name] = Number(
          expense.amount
        );
      }
    });

    const dataAmount = Object.keys(amountsPerCategory).map((category) =>
      parseInt(amountsPerCategory[category], 10)
    );

    setChartData({
      labels: [...new Set(categoryLabels)],
      datasets: [
        {
          data: dataAmount,
          backgroundColor: [...new Set(colorLabels)],
        },
      ],
    });
  }, [displayedExpenses]);

  return (
    <div className="chart">
      <div className="overviewChart">
        <Doughnut data={chartData} width={100} height={50} />
      </div>
    </div>
  );
};

export default OverviewChart;
