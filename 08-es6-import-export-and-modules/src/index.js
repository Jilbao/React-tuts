import React from "react";
import * as ReactDOM from "react-dom/client";
import * as pi from "./math";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <ul>
      <li>{pi.pi}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>
  </div>
);
