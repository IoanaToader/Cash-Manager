import React from "react";
import "./Subcategories.css";

const Entertainment = (props) => {
  return (
    <>
      <div className="subcategories-full-page">
        <ul className="subcategories-ul">
          <li className="subcategories-li">
            <a className="subcategories-a" href="/" target="_blank">
              <img
                src="/img/categories/dailyFood.png"
                style={{ backgroundColor: "#64c920" }}
              />
              Daily Food
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="#">
              <img
                src="/img/categories/coffe.png"
                style={{ backgroundColor: "#64c920" }}
              />
              Coffe Shop
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="#">
              <img
                src="/img/categories/restaurant.png"
                style={{ backgroundColor: "#64c920" }}
              />
              Restaurant
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Entertainment;
