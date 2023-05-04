import React from "react";

function CategoryFilter({ selectedCategory, categories, handleCategoryChange }) {

  //categories : ["All", "Code", "Food", "Money", "Misc"]
  let categoriesList = categories.map((el, i) => {
    return <button key={i} className={selectedCategory === el ? 'selected' : ''} onClick={() => handleCategoryChange(el)}>{el}</button>
  })

  console.log(categoriesList)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categoriesList
      }
    </div>
  );
}

export default CategoryFilter;
