import { useState } from "react";
import "./ExpenseForm.css";
import ErrorModal from "../UI/ErrorModal";
const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const todayDate = new Date().toISOString().split("T")[0];
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.01);
  const [enteredDate, setEnteredDate] = useState(todayDate);
  const [error, setError] = useState(null);
  const titleChangeHandler = ({ target }) => {
    setEnteredTitle(target.value);
  };
  const dateChangeHandler = ({ target }) => {
    setEnteredDate(target.value);
  };

  const amountChangeHandler = ({ target }) => {
    setEnteredAmount(target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    if (expenseData.title.trim().length === 0) {
      setError({ title: "Invalid input", message: "provide correct data" });
      return;
    }
    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0.01);
    setEnteredDate(todayDate);
  };

  return error ? (
    <ErrorModal
      title={error.title}
      message={error.message}
      setError={setError}
    />
  ) : (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            min="2019-01-01"
            max={todayDate}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
