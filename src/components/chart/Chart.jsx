import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ data }) {
  const dataValues = data.map((i) => {
    return i.value;
  });

  const totalMax = Math.max(...dataValues);

  return (
    <div className="chart">
      {data.map((i) => {
        return (
          <ChartBar
            key={i.label}
            value={i.value}
            maxV={totalMax}
            label={i.label}
          />
        );
      })}
    </div>
  );
}
