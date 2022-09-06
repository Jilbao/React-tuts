import React, { useState } from "react";

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
          {items.map((Element) => {
            return <li value={Element}>{Element}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
