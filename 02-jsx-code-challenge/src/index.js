//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import * as ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const fName = "Jil";
const lName = "Bao";
const luckyNumber = 7;

root.render(
  <div>
    <h1>Hello {fName + " " + lName} !</h1>
    <p>My lucky number is {Math.floor(Math.random() * 7)}</p>
  </div>
);
