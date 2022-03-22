import {RecoilRoot,} from 'recoil';
import TransactionList from './components/TransactionList';
import appStyles from "./App.module.css";

function App() {
  return (
    <div className={appStyles.container}>
        <header className={appStyles.header}>
            Expense Tracker
        </header>
        <RecoilRoot>
          <TransactionList />
        </RecoilRoot>
    </div>
  );
}

export default App;
