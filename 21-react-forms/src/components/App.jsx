import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("");

  const [backgroundColor, setBackgroundColor] = React.useState({
    backgroundColor: ""
  });

  function mouseOver() {
    setBackgroundColor({ backgroundColor: "#000" });
  }
  function mouseOut() {
    setBackgroundColor({ backgroundColor: "#fff" });
  }

  const [headingName, setHeadingName] = React.useState("");

  function handleChange(event) {
    setHeadingName(event.target.value);
  }
  function handleClick(event) {
    //console.log(headingName);
    setHeadingText(headingName);
    console.log(event);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={headingName}
        />
        <button
          type="submit"
          style={backgroundColor}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
