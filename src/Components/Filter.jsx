import React from "react";
import "../App.css";

const Filter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ["All", "Fruits", "Vegetables", "Meat"];

  return (
    <div className="filter-container">
      <label htmlFor="category">Filter by Category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="dropdown"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
