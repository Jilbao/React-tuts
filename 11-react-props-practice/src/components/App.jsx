import React from "react";
import { Card } from "./Card";
import { contacts } from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((element) => {
        return (
          <Card
            name={element.name}
            imgURL={element.imgURL}
            phone={element.phone}
            email={element.email}
          />
        );
      })}
      ;
    </div>
  );
}

export default App;
