import React from "react";

const Category = ({ category, handleCategorySelect }) => {
  const showSubcategory = () => {
    handleCategorySelect(category.subcategories);
  };

  return (
    <li onClick={showSubcategory} className="categories-item-li">
      <img
        src={category.image}
        style={{ backgroundColor: category.backgroundColor }}
        alt="category icon"
      />
      {category.name}
    </li>
  );
};

export default Category;
