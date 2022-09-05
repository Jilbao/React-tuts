const currentDate = new Date();
const currentHours = currentDate.getHours();
let headerText = " ";

const customStyle = { color: "" };

if ((currentHours >= 6) & (currentHours <= 12)) {
  headerText = "Good Morning";
  customStyle.color = "red";
} else if ((currentHours > 12) & (currentHours <= 18)) {
  headerText = "Good Afternoon";
  customStyle.color = "green";
} else {
  headerText = "Good Night";
  customStyle.color = "blue";
}

export function Header() {
  return (
    <h1 className="heading" style={customStyle}>
      {headerText}
    </h1>
  );
}
