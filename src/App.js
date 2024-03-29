import "./App.css";
import BudgetForm from "./components/BudgetForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FinancialSummary from "./components/FinancialSummary";

function App() {
  return (
    <div className="App">
      <h1>Budget Planner</h1>
      <BudgetForm />
      <ExpenseForm />
      <ExpenseList />
      <FinancialSummary />
    </div>
  );
}

export default App;
