import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpanseData) => {
    const expenseData = { ...enteredExpanseData, id: Math.random().toString() };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
