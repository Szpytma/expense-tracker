import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpenseList = ({ items }) => {
  return (
    <Card className="expenses">
      {items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseList;
