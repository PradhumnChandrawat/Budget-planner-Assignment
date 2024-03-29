import { createContext, useState } from "react";
import React from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <BudgetContext.Provider value={{ budget, setBudget, expenses, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
