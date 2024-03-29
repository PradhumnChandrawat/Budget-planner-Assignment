import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import "./FinancialSummary.css";

const FinancialSummary = () => {
  const { budget, expenses } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h2>Financial Summary</h2>
      <p>Total Budget: ${budget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
};

export default FinancialSummary;
