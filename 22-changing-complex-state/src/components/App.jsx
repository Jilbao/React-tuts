import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleFullName(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: value
        };
      }
    });
  }

  const [title, setTitle] = useState();

  function handleSubmit(event) {
    setTitle(", " + fullName.fName + " " + fullName.lName);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello{title}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
