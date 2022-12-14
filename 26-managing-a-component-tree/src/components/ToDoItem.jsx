export function ToDoItem(props) {
  return (
    <li
      id={props.id}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.value}
    </li>
  );
}
