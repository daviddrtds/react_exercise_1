import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/newExpense/newExpense";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import "./App.css";

const itemList = [
  {
    id: uuid(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: uuid(),
    title: "New Television",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: uuid(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuid(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: uuid(),
    title: "BaseBall Bat",
    amount: 49,
    date: new Date(2022, 8, 12),
  },
  {
    id: uuid(),
    title: "New Car",
    amount: 1000,
    date: new Date(2020, 2, 7),
  },
];

function App() {
  const [expense, setExpense] = useState(itemList);

  const saveItem = (newItem) => {
    setExpense((current) => {
      return [newItem, ...current];
    });
  };

  return (
    <div>
      <div>
        <NewExpense saveToDatabase={saveItem} />

        <ExpenseList data={expense} />
      </div>
    </div>
  );
}

export default App;
