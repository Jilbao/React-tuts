import React from "react";

function App() {
  setInterval(fetchTime, 1000);

  let time = new Date().toLocaleTimeString();

  const [state, setState] = React.useState(time);

  function fetchTime() {
    setState(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={fetchTime}>Get Time</button>
    </div>
  );
}

export default App;
