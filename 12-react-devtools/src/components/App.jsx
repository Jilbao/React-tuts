import React from "react";
import { Card } from "./Card";
import { contacts } from "../contacts";
import { Avatar } from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/108652735?v=4" />
      {contacts.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            img={element.img}
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
