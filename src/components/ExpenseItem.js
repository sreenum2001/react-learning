import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  // console.log(props.expense.date.getDate()); // gives one or two digit date
  // console.log(props.expense.date.getMonth()); // gives numerical month

  const month = props.expense.date.toLocaleString("en-US", { month: "long" }); // gives String month
  const day = props.expense.date.toLocaleString("en-US", { day: "2-digit" }); // gives 2 digit month like 01 or 30
  const year = props.expense.date.getFullYear();

  const expenseDesc = props.expense.desc;
  const expensePrice = props.expense.price;

  // we can have indivial attribtes that extracts and assinged like function ExpenseItem(datem desc, price) or like below
  //const expenseDate = props.expense.date;
  //const expenseDesc = props.expense.desc;
  //const expensePrice = props.expense.price;

  return (
    <Card className="expense-item">
      {/* <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div> */}

      <ExpenseDate date={props.expense.date} />
      <div className="expense-item__description">
        <h2> {expenseDesc} </h2>
        <div className="expense-item__price"> ${expensePrice} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
