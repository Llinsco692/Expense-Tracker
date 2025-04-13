import React from "react";

const Filter = ({ categories, filter, setFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter by:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
