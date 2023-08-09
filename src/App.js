import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="App">
      <h3> Happy to restart </h3>

      <br></br>
      <Expenses />
    </div>
  );
}

export default App;

/* <ExpenseItem
date={element.date}
expenseDesc={element.desc}
expensePrice={element.price}
/> */
