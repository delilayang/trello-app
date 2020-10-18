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
    <form className="category-create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Create new category"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button>Create</button>
    </form>
  );
};

export default CategoryForm;
