import React from "react";
import "./Subcategories.css";

const Shopping = (props) => {
  return (
    <>
      <div className="subcategories-full-page">
        <ul className="subcategories-ul">
          <li className="subcategories-li">
            <a className="subcategories-a" href="/add-expense" target="_blank">
              <img
                src="/img/categories/dailyFood.png"
                style={{ backgroundColor: "#349feb" }}
              />
              Daily Food
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="/add-expense">
              <img
                src="/img/categories/coffe.png"
                style={{ backgroundColor: "#349feb" }}
              />
              Coffe Shop
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="/add-expense">
              <img
                src="/img/categories/restaurant.png"
                style={{ backgroundColor: "#349feb" }}
              />
              Restaurant
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Shopping;
