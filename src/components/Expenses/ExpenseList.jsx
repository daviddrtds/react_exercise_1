import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";

export default function ExpenseList({ data }) {
  const [selectedYear, setSelectedYear] = useState("all");

  const listYear = (year) => {
    setSelectedYear(year);
  };

  const filterYear = data.filter((i) => {
    return i.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expense-list">
      <ExpenseFilter selected={selectedYear} onYearChange={listYear} />
      {selectedYear !== "all" && <ExpenseChart expenseData={filterYear} />}
      {!filterYear.length && selectedYear !== "all" && <p>No result found</p>}
      {selectedYear === "all"
        ? data.map((i) => (
            <ExpenseItem
              key={i.id}
              id={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          ))
        : filterYear.map((i) => (
            <ExpenseItem
              key={i.id}
              id={i.id}
              title={i.title}
              amount={i.amount}
              date={i.date}
            />
          ))}
    </Card>
  );
}
