import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div classNAme="expense-item">
      <div>15 August 2023</div>
      <div class="expense-item__description">
        <h2 className="expense-item">Book</h2>
        <div className="expense-item__location">Delhi</div>
        <div class="expense-item__price">$10</div>
      </div>
    </div>
  );
}

export default ExpenseItem;