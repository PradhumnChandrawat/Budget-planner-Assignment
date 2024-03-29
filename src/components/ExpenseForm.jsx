import React, { useContext, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const { addExpense } = useContext(BudgetContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    const newExpense = { name, amount };
    addExpense(newExpense);
    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleExpenseSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
