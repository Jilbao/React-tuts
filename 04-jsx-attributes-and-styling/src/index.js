import React from "react";
import * as ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  textAlign: "center",
  fontSize: "4rem"
};

customStyle.color = "blue";

root.render(
  <div>
    <h1 style={customStyle}>Heyyo</h1>
    <div>
      <img src={img + "?grayscale"} alt="" />
    </div>
  </div>
);
