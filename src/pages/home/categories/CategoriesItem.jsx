import React, { useState, useContext } from "react";
import { withRouter } from "react-router";
import { UserContext } from "../../../contexts/UserContext";
import "./CategoriesItem.css";
import Category from "./Category";
import Subcategory from "./Subcategory";

const CategoriesItem = () => {
  const [isSubcategoryVisible, setSubcategoryVisible] = useState(false);
  const [categoryIdSelected, setCategoryIdSelected] = useState(null);

  const userContext = useContext(UserContext);

  const toggleSubcategoryVisible = () => {
    setSubcategoryVisible(!isSubcategoryVisible);
  };

  const handleCategorySelect = (category) => {
    setCategoryIdSelected(category.id);
    toggleSubcategoryVisible();
    userContext.methods.onCategorySelect(category.subcategories);
  };

  return (
    <>
      <div className="categories-item-full-page">
        <div className="categories-item-navbar">
          <div className="categories-item-navbar-title">All Categories</div>
        </div>

        <ul className="categories-item-ul">
          {userContext.data?.categories?.map((category, idx) => {
            return (
              <Category
                key={idx}
                category={category}
                handleCategorySelect={() => handleCategorySelect(category)}
              />
            );
          })}
        </ul>
      </div>

      {isSubcategoryVisible && userContext.data.subcategories && (
        <div onClick={toggleSubcategoryVisible} style={{ width: "100%" }}>
          <div className="subcategories-full-page">
            <ul className="subcategories-ul">
              {userContext.data?.subcategories?.map((subcategory, idx) => (
                <Subcategory
                  key={idx}
                  category={categoryIdSelected}
                  subcategory={subcategory}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(CategoriesItem);
