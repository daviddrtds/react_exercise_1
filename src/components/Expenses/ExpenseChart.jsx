import Chart from "../chart/Chart";

export default function ExpenseChart({ expenseData }) {
  const chartData = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let expense of expenseData) {
    const expenseMonth = expense.date.getMonth();
    chartData[expenseMonth].value += expense.amount;
  }

  return (
    <div>
      <Chart data={chartData} />
    </div>
  );
}
