import "./ExpensesList.css";
import "./ExpensesFilter.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const ExpenseList = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  console.log(selectedYear);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        {items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseList;
