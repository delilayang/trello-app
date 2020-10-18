import React, { useState } from "react";
import Category from "./component/Category";
import CategoryForm from "./component/CategoryForm";
import "./App.scss";

function App() {
  const [categories, setCategories] = useState([]);

  const addCategory = (text) => {
    const newCategories = [...categories, { text }];
    setCategories(newCategories);
    console.log(newCategories);
  };

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <div className="app">
      {categories.map((category, index) => (
          <Category
            key={index}
            index={index}
            category={category}
            deleteCategory={deleteCategory}
          />
        ))}

      <CategoryForm addCategory={addCategory} />
    </div>
  );
}

export default App;
