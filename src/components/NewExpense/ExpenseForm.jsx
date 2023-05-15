import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [userInput, setUserInput] = useState({});
  console.log(userInput);
  const titleChangeHandler = ({ target }) => {
    setEnteredTitle(target.value);
  };
  const dateChangeHandler = ({ target }) => {
    setEnteredDate(target.value);
  };

  const amountChangeHandler = ({ target }) => {
    setEnteredAmount(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setUserInput({
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    });
  };

  return (
    <form>
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
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
