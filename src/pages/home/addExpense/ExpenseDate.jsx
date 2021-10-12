import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();

  return (
    <div>
      <div className="expense-date-month">{month}</div>
      <div className="expense-date-day">{day}</div>
      <div className="expense-date-year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
