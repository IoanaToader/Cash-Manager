import React, { useState } from "react";
import { withRouter } from "react-router";
import "./CategoriesItem.css";
import Category from "./Category";
import Subcategory from "./Subcategory";

const CategoriesItem = (props) => {
  const [isSubcategoryVisible, setSubcategoryVisible] = useState(false);
  const [subcategories, setSubcategories] = useState([]);

  const toggleSubcategoryVisible = () => {
    setSubcategoryVisible(!isSubcategoryVisible);
  };

  const handleCategorySelect = (subcategories) => {
    toggleSubcategoryVisible();
    setSubcategories(subcategories);
  };

  const categories = [
    {
      id: "1",
      name: "Food and Drinks",
      image: "/img/categories/food-icon.png",
      backgroundColor: "#eb4034",
      subcategories: [
        {
          id: "1",
          name: "Daily Food",
          image: "/img/categories/dailyFood.png",
          backgroundColor: "#eb4034",
        },
        {
          id: "2",
          name: "Coffe Shop",
          image: "/img/categories/coffe.png",
          backgroundColor: "#eb4034",
        },
        {
          id: "3",
          name: "Restaurant",
          image: "/img/categories/restaurant.png",
          backgroundColor: "#eb4034",
        },
      ],
    },
    {
      id: "2",
      name: "Shopping",
      image: "/img/categories/shopping-icon.png",
      backgroundColor: "#349feb",
      subcategories: [
        {
          id: "1",
          name: "Pet Shop",
          image: "/img/categories/shopping-icon.png",
          backgroundColor: "#349feb",
        },
        {
          id: "2",
          name: "Gifts",
          image: "/img/categories/shopping-icon.png",
          backgroundColor: "#349feb",
        },
        {
          id: "3",
          name: "Jewelry",
          image: "/img/categories/shopping-icon.png",
          backgroundColor: "#349feb",
        },
        {
          id: "4",
          name: "Health and Beauty",
          image: "/img/categories/shopping-icon.png",
          backgroundColor: "#349feb",
        },
      ],
    },
    {
      id: "3",
      name: "Household",
      image: "/img/categories/home-icon.png",
      backgroundColor: "#eb8f34",
    },
    {
      id: "4",
      name: "Transportation",
      image: "/img/categories/transportation-icon.png",
      backgroundColor: "#eb4034",
    },
    {
      id: "5",
      name: "Car",
      image: "/img/categories/car-icon.png",
      backgroundColor: "#a444db",
    },
    {
      id: "6",
      name: "Life and Entertainment",
      image: "/img/categories/food-icon.png",
      backgroundColor: "#64c920",
    },
    {
      id: "7",
      name: "Hardware, PC",
      image: "/img/categories/pc-icon.png",
      backgroundColor: "#2f72ba",
    },
    {
      id: "8",
      name: "Due",
      image: "/img/categories/due-icon.png",
      backgroundColor: "#2aad7b",
    },
    {
      id: "9",
      name: "Investment",
      image: "/img/categories/investment-icon.png",
      backgroundColor: "#f562ae",
    },
    {
      id: "10",
      name: "Income",
      image: "/img/categories/income-icon.png",
      backgroundColor: "#fcb04c",
    },
  ];

  return (
    <>
      {isSubcategoryVisible && subcategories && (
        <div
          onClick={toggleSubcategoryVisible}
          id="overlay"
          style={{ width: "100%" }}
        >
          <div className="subcategories-full-page">
            <ul className="subcategories-ul">
              {subcategories.map((subcategory) => (
                <Subcategory subcategory={subcategory} />
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="categories-item-full-page">
        <div className="categories-item-navbar">
          <div className="categories-item-navbar-title">All Categories</div>
        </div>

        <ul className="categories-item-ul">
          {categories.map((category) => {
            return (
              <Category
                category={category}
                handleCategorySelect={handleCategorySelect}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default withRouter(CategoriesItem);
