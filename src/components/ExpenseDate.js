import "./ExpenseDate.css"

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
]
function ExpenseDate(props) {
  const month = months[props.date.getMonth()]
  const year = props.date.getFullYear();
  const date = new Date(props.date).getDate();
  console.log(date);
  return (
    <div>
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__date">{date}</div>
      </div>
      </div>
    </div>
  )
}

export default ExpenseDate;