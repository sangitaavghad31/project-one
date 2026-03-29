import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card>
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
    </Card>
  )
}

export default Expenses;