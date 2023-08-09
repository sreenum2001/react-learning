import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          dataPoint={dataPoint}
          maxAmount={props.maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
