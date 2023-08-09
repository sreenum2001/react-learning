import "./ChartBar.css";

const ChartBar = (props) => {
  // console.log(props.dataPoint.amount + "/" + props.maxAmount);
  const fillPerentage = (props.dataPoint.amount / props.maxAmount) * 100;
  //console.log(fillPerentage);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: fillPerentage }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.dataPoint.month}</div>
    </div>
  );
};

export default ChartBar;
