import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem({ id, title, amount, date }) {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>

      <h2>{title}</h2>
      <div className="expense-item__price">{amount} €</div>
    </Card>
  );
}
