import React from "react";
import { emojipedia } from "../emojipedia";
import { Entry } from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((element) => {
          return (
            <Entry
              key={element.id}
              emoji={element.emoji}
              name={element.name}
              meaning={element.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
