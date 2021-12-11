import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import React, { useState, useContext, useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { UserContext } from "../../contexts/UserContext";
import "./HomeChart.css";

const HomeChart = (props) => {
  const userContext = useContext(UserContext);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const thirtyDaysAgo = new Date(today);
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  thirtyDaysAgo.setHours(0, 0, 0, 0);

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(today);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const expenses = userContext.data?.expenses;

  useEffect(() => {
    const categoryLabels = expenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= startDate && expenseDate <= endDate;
      })
      .map((expense) => expense.expenseCategory?.name);

    const colorLabels = expenses
      .filter((expense) => {
        const expenseDate = new Date(expense.date);
        return expenseDate >= startDate && expenseDate <= endDate;
      })
      .map((expense) => expense.expenseCategory?.backgroundColor);

    let amountsPerCategory = {};
    expenses.forEach((expense) => {
      const expenseDate = new Date(expense.date);
      if (expenseDate >= startDate && expenseDate <= endDate) {
        if (amountsPerCategory[expense.expenseCategory?.name]) {
          amountsPerCategory[expense.expenseCategory?.name] += Number(
            expense.amount
          );
        } else {
          amountsPerCategory[expense.expenseCategory?.name] = Number(
            expense.amount
          );
        }
      }
    });

    const dataAmount = Object.keys(amountsPerCategory).map((category) =>
      parseInt(amountsPerCategory[category], 10)
    );

    setChartData({
      labels: [...new Set(categoryLabels)],
      datasets: [
        {
          label: "Selected expenses",
          backgroundColor: "white",
          data: dataAmount,
          backgroundColor: [...new Set(colorLabels)],
        },
      ],
    });
  }, [userContext, startDate, endDate]);

  return (
    <div className="homeChart-fullPage">
      <div className="homeChart-chartElements">
        <div className="homeChart-datePicker">
          <div
            style={{
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <div style={{ color: "#bab8b8" }}> Start date:</div>
            <DatePickerComponent
              value={startDate}
              onChange={(date) => setStartDate(date.value)}
              format="dd-MMM-yy"
              cssClass="e-calendar-green"
            />
          </div>
          <div>
            <img src="/img/to.png" style={{ marginTop: "1rem" }}></img>
          </div>
          <div style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>
            <div style={{ color: "#bab8b8" }}>End date:</div>
            <DatePickerComponent
              value={endDate}
              onChange={(date) => setEndDate(date.value)}
              format="dd-MMM-yy"
              cssClass="e-calendar-green"
            />
          </div>
        </div>
        <div className="homeChart-chartBar">
          <div className="pie-chart">
            <Pie data={chartData} />
          </div>
          <div className="bar-chart">
            <Bar data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChart;
