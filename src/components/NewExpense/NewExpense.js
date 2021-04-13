import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [toggleExpenseForm, setToggleExpenseForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const toggleExpenseFormHandler = () => {
    setToggleExpenseForm(!toggleExpenseForm);
  };
  return (
    <div className="new-expense">
      <button onClick={toggleExpenseFormHandler}>Add a Expense</button>
      {toggleExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          close={toggleExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
