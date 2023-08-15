import React, { useState } from "react";
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

  const [validTtile, setValidTitle] = useState(true);
  const [validAmount, setValidAmount] = useState(true);
  const [validDate, setValidDate] = useState(true);

  const constructExpence = (event) => {
    event.preventDefault();

    const [month, day, year] = date.split("-");
    var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

    if (title.trim().length == 0) {
      console.log("Tirle Error");
      setValidTitle(false);
    } else {
      setValidTitle(true);
    }

    if (amount.trim().length == 0) {
      console.log("Amt Error");
      setValidAmount(false);
    } else {
      setValidAmount(true);
    }

    if (!pattern.test(date)) {
      console.log("Date Error");
      setValidDate(false);
    } else {
      setValidDate(true);
    }

    if (
      title.trim().length == 0 ||
      amount.trim().length == 0 ||
      !pattern.test(date)
    ) {
      return;
    }

    const newExpense = {
      desc: title,
      price: amount,
      date: new Date(month, day - 1, year),
    };
    setTitle("");
    setAmount("");
    setDate("");
    props.onSave(newExpense);
  };

  return (
    <form onSubmit={constructExpence}>
      <div className="new-expense__controls">
        <div
          className={
            validTtile ? "new-expense__control" : "new-expense__control invalid"
          }
        >
          <label> Title </label>
          <input type="text" value={title} source="title" onChange={setValue} />
        </div>
        <div
          className={
            validAmount
              ? "new-expense__control"
              : "new-expense__control invalid"
          }
        >
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
        <div
          className={
            validDate ? "new-expense__control" : "new-expense__control invalid"
          }
        >
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
