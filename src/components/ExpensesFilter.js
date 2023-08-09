import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //const [selectedYear, setSlectedYear] = React.useState("");

  const setSelectedYear = (event) => {
    // setSlectedYear(event.target.value);
    props.onSelect(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={setSelectedYear}>
          <option value=" "> </option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
