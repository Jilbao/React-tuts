import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");

  function handleClick() {
    console.log("clicked");
    setHeadingText("Submitted");
  }
  const [backgroundColor, setBackgroundColor] = React.useState({
    backgroundColor: ""
  });

  function mouseOver() {
    setBackgroundColor({ backgroundColor: "#000" });
  }
  function mouseOut() {
    setBackgroundColor({ backgroundColor: "#fff" });
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        onSubmit={handleClick}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={backgroundColor}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
