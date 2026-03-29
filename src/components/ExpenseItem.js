import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2023,7,15).toISOString();
    const expenseTitle = "Insurance";
    const expenseAmount = 50;
    const expenseLocation = "Bangalore"
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div class="expense-item__description">
        <h2 className="expense-item">{expenseTitle}</h2>
        <div className="expense-item__location">{expenseLocation}</div>
        <div class="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;