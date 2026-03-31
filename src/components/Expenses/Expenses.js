import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filtereYear, setFilterYear] = useState("2023");

  const changeFilterHandler = (selectedYear) =>{
    setFilterYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filtereYear} onChangeFilter={changeFilterHandler}/>
    {
      props.expenses
      .filter(ex=>ex.date.getFullYear()==filtereYear)
      .map((expense) => {
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