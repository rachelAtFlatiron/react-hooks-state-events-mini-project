import React, { useState } from "react";

function CategoryFilter({ categories, filter, updateFilter }) {
	//selected saves category string
	

	const handleClick = (category) => {
    updateFilter(category)
	};



	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categories.map((category) => (
				// does selected state match category string
				<button key={category} className={filter === category ? "selected" : ""} onClick={() => handleClick(category)}>
					{category}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;
