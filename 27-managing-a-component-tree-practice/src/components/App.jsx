import React, { useState } from "react";
import { InputArea } from "./InputArea";
import { ToDoItem } from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    if (item === "") {
      return;
    } else {
      setItems((prevValue) => {
        return [...prevValue, item];
      });
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
      <InputArea onClickAdd={addItem} />
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
