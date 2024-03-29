import React, { useContext, useEffect, useState } from "react";
import { BudgetContext } from "../context/BudgetContext";
import "./BudgetForm.css";

const BudgetForm = () => {
  const [budgetInput, setBudgetInput] = useState("");
  const { setBudget } = useContext(BudgetContext);
  const debounceDuration = 1000;

  useEffect(() => {
    const handler = setTimeout(() => {
      if (budgetInput !== "") {
        setBudget(budgetInput);
      }
    }, debounceDuration);
    return () => {
      clearTimeout(handler);
    };
  }, [budgetInput, setBudget]);

  const handleBudgetChange = (e) => {
    setBudgetInput(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your Budget"
        value={budgetInput}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default BudgetForm;
