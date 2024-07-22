import React from "react";

function CategoryFilter({ updateCategory, categories, category }) {
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{categories.map((el, i) => {
				return (
					<button 
            key={i} 
            onClick={() => updateCategory(el)}
            className={category === el ? 'selected' : ''}
          >
          {el}
					</button>
				);
			})}
		</div>
	);
}

export default CategoryFilter;
