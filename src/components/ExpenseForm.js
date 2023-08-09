import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [date, setDate] = React.useState("");

  const setValue = (event) => {
    const source = event.target.getAttribute("source");
    const value = event.target.value;

    switch (source) {
      case "title":
        setTitle(value);
        break;
      case "amount":
        setAmount(value);
        break;
      default:
        setDate(value);
        break;
    }
    console.log(source + " " + value);
  };

  const newTitle = (event) => {
    //   alert(event.target.getAttribute("evetitle"));
    setTitle(event.target.value);
    console.log(title);
  };
  const newAmount = (event) => {
    setAmount(event.target.value);
  };
  const newDate = (event) => {
    setDate(event.target.value);
  };

  // const [userInput, setUserInput] = React.useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  // const setUserTile = (event) => {
  //   setUserInput({ ...userInput, title: event.target.value });
  //   console.log(userInput.title);
  // };

  // const setUserTileThisAlsoWork = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, title: event.target.value };
  //   });

  //   console.log(userInput.title);
  // };

  const constructExpence = (event) => {
    event.preventDefault();

    const selectedDate = date.split("-");

    const newExpense = {
      desc: title,
      price: amount,
      date: new Date(selectedDate[0], selectedDate[1] - 1, selectedDate[2]),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSave(newExpense);
  };

  return (
    <form onSubmit={constructExpence}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value={title} source="title" onChange={setValue} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            source="amount"
            onChange={setValue}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input type="date" value={date} source="date" onChange={setValue} />
        </div>
        <div className="new-expense__control">
          <button type="submit"> Save </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
