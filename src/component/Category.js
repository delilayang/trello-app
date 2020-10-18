import React, {useState} from "react";

const Category = ({ category, index, deleteCategory }) => {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const addItem = (text) => {
    const newItems = [...items, { text }];
    setItems(newItems);
    console.log(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addItem(value);
    setItems("");
  };

  return (
    <div className="category">
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

      <div className="category-list">
        <ul className="category-list-item">
          {items.map((item, index) => (
            <div>
              <li key={index}>{item}</li>
              <button onClick={deleteItem(index)}>Remove</button>
            </div>
          ))}
        </ul>
        <form className="category-list-item-add" onSubmit={handleSubmit}>
          <input 
            type="text"
            className="input"
            placeholder="Add new catagory item"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-button">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Category;
