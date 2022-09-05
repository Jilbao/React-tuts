import { Avatar } from "./Avatar";
import { Detail } from "./Detail";

export function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail phone={props.phone} email={props.email} />
      </div>
    </div>
  );
}
