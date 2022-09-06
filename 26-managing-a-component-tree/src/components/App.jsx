import React, { useState } from "react";
import { ToDoItem } from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }
  function addItem() {
    if (item === "") {
      return;
    } else {
      setItems((prevValue) => {
        return [...prevValue, item];
      });
      setItem("");
    }
  }
  function removeItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" name="item" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((Element, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                onChecked={removeItem}
                value={Element}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
