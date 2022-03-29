import { Route, Routes } from "react-router-dom";
import Balance from './components/balance/Balance';
import ExpenseList from "./components/expenses/ExpenseList";
import IncomeList from "./components/incomes/IncomeList";
import NavigateBar from "./components/NavigateBar";

function App() {
  return (
      <Routes>
        <Route path="/" element={<NavigateBar />}>
            <Route path="balance" element={<Balance />} />
            <Route path="income" element={<IncomeList />} />
            <Route path="expense" element={<ExpenseList />} />
        </Route>
      </Routes>
  );
}

export default App;
