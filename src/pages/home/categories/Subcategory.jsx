import React from "react";
import "./Subcategories.css";
import { useHistory } from "react-router";

const Subcategory = ({ category, subcategory }) => {
  const history = useHistory();

  const handleNavigation = (subcategory) => {
    history.push("/add-expense", { category, subcategory });
  };

  return (
    <>
      <li className="subcategories-li">
        <div
          className="subcategory-name"
          onClick={() => handleNavigation(subcategory.id)}
        >
          <img
            src={subcategory.image}
            style={{ backgroundColor: subcategory.backgroundColor }}
            alt="subcategory icon"
          />
          {subcategory.name}
        </div>
      </li>
    </>
  );
};

export default Subcategory;
