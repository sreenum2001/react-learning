import React from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const propagteExpense = (expense) => {
    props.onSave(expense);
    setAddExpense(false);
  };

  const [isAddExpense, setAddExpense] = React.useState(false);

  const showAddExpenseForm = () => {
    setAddExpense(true);
  };

  return (
    <div className="new-expense">
      {isAddExpense ? (
        <ExpenseForm onSave={propagteExpense} />
      ) : (
        <button onClick={showAddExpenseForm}> AddExpense </button>
      )}
    </div>
  );
};

export default AddExpense;
