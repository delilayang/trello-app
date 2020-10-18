import React from "react";

const Category = ({ category, index, deleteCategory }) => {
  return (
    <form
      className="category"
      // style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="category-title">
        <span>{category.text}</span>
        <button
            onClick={() => {
              deleteCategory(index);
            }}
          >
            Delete
        </button>
      </div> 
      <div className="category-item">
        <div className="category-item-content">Grocerries shopping</div>
        <button>Remove</button>
      </div>

      <button className="add-button">Add</button>
    </form>
  );
};

export default Category;
