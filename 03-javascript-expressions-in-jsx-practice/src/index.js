//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import * as ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const myName = "Cagin Yarkin Sari";
const currentYear = new Date();

root.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear.getFullYear()}</p>
  </div>
);
