import React from "react";
import "./CategoriesItem.css";
import "./Food.css";

const Food = (props) => {
  return (
    <>
      <div id="food">
        <div className="categories-item-full-page">
          <div className="categories-item-navbar">
            <div className="categories-item-navbar-title">All Categories</div>
          </div>

          <ul className="categories-item-ul">
            <li className="categories-item-li">
              <img
                src="/img/categories/food-icon.png"
                style={{ backgroundColor: "#eb4034" }}
              />
              Daily Food
            </li>

            <li className="categories-item-li">
              <img
                src="/img/categories/shopping-icon.png"
                style={{ backgroundColor: "#349feb" }}
              />
              Coffe Shop
            </li>

            <li className="categories-item-li">
              <img
                src="/img/categories/home-icon.png"
                style={{ backgroundColor: "#eb8f34" }}
              />
              Restaurant & Fast-food
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Food;
