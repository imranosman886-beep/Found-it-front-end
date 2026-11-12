// OWNER: Beatrice

import React, { useState } from "react";
import "./FilterBar.css";

function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: "",
    status: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);

    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  const handleReset = () => {
    const clearedFilters = {
      category: "",
      status: "",
      location: "",
    };

    setFilters(clearedFilters);

    if (onFilterChange) {
      onFilterChange(clearedFilters);
    }
  };

  return (
    <div className="filter-bar">
      <h3>Filter Items</h3>

      <div className="filter-options">
        {/* Category Filter */}
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Accessories">Accessories</option>
          <option value="Documents">Documents</option>
          <option value="Other">Other</option>
        </select>

        {/* Status Filter */}
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
        >
          <option value="">All Statuses</option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        {/* Location Filter */}
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
        >
          <option value="">All Locations</option>
          <option value="Library">Library</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="Lecture Hall">Lecture Hall</option>
          <option value="Hostel">Hostel</option>
          <option value="Sports Ground">Sports Ground</option>
        </select>

        <button
          type="button"
          className="reset-button"
          onClick={handleReset}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
