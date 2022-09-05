import React from "react";

function App() {
  const [state, setState] = React.useState(0);

  function increase() {
    setState(state + 1);
  }

  function decrease() {
    setState(state - 1);
  }

  function multiply() {
    setState(state * 2);
  }
  function division() {
    setState(state / 2);
  }

  function reset() {
    setState(0);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={multiply}>*2</button>
      <button onClick={division}>/2</button>
      <button className="reset" onClick={reset}>
        reset
      </button>
    </div>
  );
}

export default App;
