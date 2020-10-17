import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="catagory">
          <div className="catagory-title">To Do</div>
          <div className="catagory-item">Gorceries shopping</div>
        </div>
        <div className="create-catagory">
          <input type="text" value="" placeholder="enter catagory item" />
        </div>
      </div>
    </div>
  );
}

export default App;
