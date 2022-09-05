import { DataTitle } from "./DataTitle";
import { DataDefinition } from "./DataDefinition";

export function Entry(props) {
  return (
    <div className="term">
      <DataTitle emoji={props.emoji} name={props.name} />
      <DataDefinition meaning={props.meaning} />
    </div>
  );
}
