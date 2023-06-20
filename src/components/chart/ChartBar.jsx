import "./ChartBar.css";

export default function ChartBar({ value, maxV, label }) {
  let fill = "0%";

  if (maxV > 0) {
    fill = Math.round((value / maxV) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fill }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}
