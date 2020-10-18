import React, { useState } from "react";
import Category from "./component/Category";
import CategoryForm from "./component/CategoryForm";
import "./App.scss";

function App() {
  const [categories, setCategories] = useState([
    // { text: "Morning - Study React", isCompleted: false },
    // { text: "Afternoon - Workout in gym 2hrs ", isCompleted: false },
    // { text: "Evening - Reading book", isCompleted: false },
  ]);

  const addCategory = (text) => {
    const newCategories = [...categories, { text }];
    setCategories(newCategories);
    console.log(newCategories);
  };

  // const completeCategory = (index) => {
  //   const newCategories = [...categories];
  //   newCategories[index].isCompleted = true;
  //   setTodos(newCategories);
  // };

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  return (
    <div className="app">
      {/* <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            // completeCategory={completeCategory}
            deleteCategory={deleteCategory}
          />
        ))}
      </div> */}

      {categories.map((category, index) => (
          <Category
            key={index}
            index={index}
            category={category}
            // completeCategory={completeCategory}
            deleteCategory={deleteCategory}
          />
        ))}

      <CategoryForm addCategory={addCategory} />
    </div>
  );
}

export default App;
