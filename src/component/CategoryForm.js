import React, { useState } from "react";

const CategoryForm = ({ addCategory }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addCategory(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="category-create-form">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Create new category"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>Create</button>
    </form>
  );
};

export default CategoryForm;
