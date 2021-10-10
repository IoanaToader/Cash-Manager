import React, { useState } from "react";
import { withRouter } from "react-router";
import "./CategoriesItem.css";
import Food from "./Food";

const CategoriesItem = (props) => {
  const [isFoodPageVisible, setFoodPageVisible] = useState(false);

  const toggleFoodDrinksPage = () => {
    setFoodPageVisible(!isFoodPageVisible);
  };

  return (
    <>
      <div className="categories-item-full-page">
        <div className="categories-item-navbar">
          <div className="categories-item-navbar-title">All Categories</div>
        </div>

        <ul className="categories-item-ul">
          <li onClick={toggleFoodDrinksPage} className="categories-item-li">
            <img
              src="/img/categories/food-icon.png"
              style={{ backgroundColor: "#eb4034" }}
            />
            Food and Drinks
          </li>
          {isFoodPageVisible && <Food />}
          <li className="categories-item-li">
            <img
              src="/img/categories/shopping-icon.png"
              style={{ backgroundColor: "#349feb" }}
            />
            Shopping
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/home-icon.png"
              style={{ backgroundColor: "#eb8f34" }}
            />
            Household
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/transportation-icon.png"
              style={{ backgroundColor: "#8c8c8b" }}
            />
            Transportation
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/car-icon.png"
              style={{ backgroundColor: "#a444db" }}
            />
            Car
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/life-icon.png"
              style={{ backgroundColor: "#64c920" }}
            />
            Life and Entertainment
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/pc-icon.png"
              style={{ backgroundColor: "#2f72ba" }}
            />
            Hardware, PC
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/due-icon.png"
              style={{ backgroundColor: "#2aad7b" }}
            />
            Due
          </li>
          <li className="categories-item-li">
            <img
              src="/img/categories/investment-icon.png"
              style={{ backgroundColor: "#f562ae" }}
            />
            Investment
          </li>

          <li className="categories-item-li">
            <img
              src="/img/categories/income-icon.png"
              style={{ backgroundColor: "#fcb04c" }}
            />
            Income
          </li>
        </ul>
      </div>
    </>
  );
};

export default withRouter(CategoriesItem);
