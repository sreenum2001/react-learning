import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import AddExpense from "./AddExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./chart/ExpenseChart";

function Expenses(props) {
  const expenseDetails = [
    { date: new Date(2017, 6, 30), desc: "Airline", price: 999.99 },
    { date: new Date(2018, 7, 30), desc: "Airline 2", price: 849 },
    // { date: new Date(2019, 6, 30), desc: "Airline", price: "999.99" },
    // { date: new Date(2023, 6, 30), desc: "Airline", price: "999.99" },
    // { date: new Date(2023, 7, 1), desc: "Marriot", price: "220" },
    // { date: new Date(2023, 7, 1), desc: "Lyft", price: "25" },
    // { date: new Date(2023, 7, 1), desc: "Lyft", price: "25" },
    // { date: new Date(2023, 7, 1), desc: "Trolly", price: "6" },
  ];

  const [expensesList, addExpense] = React.useState(expenseDetails);
  const [filterYear, setFilterYear] = React.useState(" ");

  const addToExpeneList = (newExpense) => {
    addExpense((prevState) => {
      return [newExpense, ...prevState];
    });

    //console.log(filterYear.trim().length == 0);
    if (
      filterYear.trim().length == 0 ||
      newExpense.date.getFullYear() == filterYear
    ) {
      console.log(newExpense);
      setFilterExpenses((prevState) => {
        return [newExpense, ...prevState];
      });
    }
  };

  let [filterExpenses, setFilterExpenses] = React.useState(expensesList);

  const selectedYear = (year) => {
    setFilterYear(year);
    // console.log(year + "===" + expensesList[0].date.getFullYear());
    let filterExp = expensesList.filter(
      (expense) => expense.date.getFullYear() == year
    );

    // console.log(filterExp);
    setFilterExpenses(() => {
      return year.trim().length === 0
        ? [...expensesList]
        : expensesList.filter((expense) => expense.date.getFullYear() == year);
    });
  };

  return (
    <Card className="expenses">
      <AddExpense onSave={addToExpeneList} />
      <br></br>
      <ExpenseChart expenses={filterExpenses} />
      <ExpensesFilter onSelect={selectedYear} />

      {filterExpenses.map((expense) => (
        <ExpenseItem
          key={Math.random() * filterExpenses.length}
          expense={expense}
        />
      ))}
    </Card>
  );
}

export default Expenses;
