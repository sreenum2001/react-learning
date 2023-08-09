import Chart from "./Chart";

const ExpensesChart = (props) => {
  const barChartData = [
    { month: "Jan", amount: 0 },
    { month: "Feb", amount: 0 },
    { month: "Mar", amount: 0 },
    { month: "Apr", amount: 0 },
    { month: "May", amount: 0 },
    { month: "Jun", amount: 0 },
    { month: "Jul", amount: 0 },
    { month: "Aug", amount: 0 },
    { month: "Sep", amount: 0 },
    { month: "Oct", amount: 0 },
    { month: "Nov", amount: 0 },
    { month: "Dec", amount: 0 },
  ];

  props.expenses.map((expense) => {
    barChartData[expense.date.getMonth()].amount += expense.price;
  });

  const maxAmount = Math.max(...barChartData.map((data) => data.amount));

  return (
    <div>
      <Chart dataPoints={barChartData} maxAmount={maxAmount} />
    </div>
  );
};

export default ExpensesChart;
