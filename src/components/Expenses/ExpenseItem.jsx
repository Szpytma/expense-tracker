import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount, id, setExpenses }) => {
  const handleRemove = () => {
    console.log(id);
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (expense) => expense.id !== id
      );
      return updatedExpenses;
    });
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">£{amount}</div>
          <button className="expense-button" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
