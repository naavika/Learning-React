import "./ExpenseItem.css";

const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function ExpenseItem(props) {
  const month = months[props.date.getMonth()];
  const year = props.date.getFullYear();
  const date = props.date.getDate();
  const day = days[props.date.getDay()];

  return (
    <div className = "expense-item">
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{date}</div>
      <div>{day}</div>

    </div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
        <div className="expense-item__location">{props.location}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
