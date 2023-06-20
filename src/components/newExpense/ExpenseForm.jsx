import "./ExpenseForm.css";
import { useState } from "react";

export default function ExpenseForm({ onSaveExpense, expand }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChange = (event) => {
    setFormData((current) => {
      return { ...current, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };

    onSaveExpense(expenseData);
    setFormData({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="inputTitle">Title</label>
          <input
            id="inputTitle"
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="inputAmount">Amount</label>
          <input
            id="inputAmount"
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={formData.amount}
            onChange={onChange}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="inputDate">Date</label>
          <input
            id="inputDate"
            type="date"
            min="2023-01-01"
            max="2024-01-01"
            name="date"
            value={formData.date}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button className="cancel" onClick={expand}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
