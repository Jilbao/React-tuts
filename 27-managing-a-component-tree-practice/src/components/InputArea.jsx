import { useState } from "react";

export function InputArea(props) {
  const [item, setItem] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setItem(value);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" name="item" value={item} />
      <button
        onClick={() => {
          props.onClickAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
