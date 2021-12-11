import React from "react";
import "./AddComponent.css";

const AddComponent = (props) => {
  const exitAddComponent = () => {
    props.showAddComponents();
  };

  return (
    <>
      <div className="add-component-fullPage">
        <div>
          <div className="add-component-expenseText">Add expense</div>
          <a href="/add-expense">
            <button className="add-component-expense">
              <img src="/img/addexpense.png" />
            </button>
          </a>
        </div>
        <div>
          <div className="add-component-accountText">Add account</div>
          <a href="/accounts">
            <button className="add-component-account">
              <img src="/img/addaccount.png" />
            </button>
          </a>
        </div>
        <div>
          <button className="add-component-exit" onClick={exitAddComponent}>
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
