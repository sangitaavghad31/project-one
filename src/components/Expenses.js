import ExpenseItem from "./ExpenseItem"

function Expenses(props) {
  return (
    <div>
    {
      props.expenses.map((expense) => {
        return <ExpenseItem
          key={expense.id}
          location={expense.location}
          date={expense.date}
          title={expense.title}
          price={expense.price}
        />})
      }
    </div>
  )
}

export default Expenses;