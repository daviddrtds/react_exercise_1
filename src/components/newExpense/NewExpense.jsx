import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function NewExpense({ saveToDatabase }) {
  const [showForm, setShowForm] = useState(false);

  const expandForm = () => {
    setShowForm(!showForm);
  };

  const saveExpense = (newExpense) => {
    const newData = {
      ...newExpense,
      id: uuid(),
    };
    saveToDatabase(newData);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={expandForm}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm expand={expandForm} onSaveExpense={saveExpense} />
      )}
    </div>
  );
}
