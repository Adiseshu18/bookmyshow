import React from 'react';

function FilterOptions({ setMaxPrice, maxPrice }) {
  return (
    <div className="filter-options">
      <label htmlFor="price">Max Price: ₹{maxPrice}</label>
      <input
        type="range"
        id="price"
        min="100"
        max="500"
        step="50"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
    </div>
  );
}

export default FilterOptions;
