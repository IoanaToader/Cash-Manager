import React from "react";
import "./Subcategories.css";

const Investment = (props) => {
  return (
    <>
      <div className="subcategories-full-page">
        <ul className="subcategories-ul">
          <li className="subcategories-li">
            <a className="subcategories-a" href="/" target="_blank">
              <img
                src="/img/categories/dailyFood.png"
                style={{ backgroundColor: "#f562ae" }}
              />
              Daily Food
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="#">
              <img
                src="/img/categories/coffe.png"
                style={{ backgroundColor: "#f562ae" }}
              />
              Coffe Shop
            </a>
          </li>

          <li className="subcategories-li">
            <a className="subcategories-a" href="#">
              <img
                src="/img/categories/restaurant.png"
                style={{ backgroundColor: "#f562ae" }}
              />
              Restaurant
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Investment;