import { useRecoilValue} from "recoil";
import { infoTransactionListState } from "../../recoil/recoil_state";
import TransactionList from "../TransactionList";
import balanceStyles from "./Balance.module.css";

const Balance = () => {
    const {incomes, expenses, balance} = useRecoilValue(infoTransactionListState);
    return (
        <>
          <div className={balanceStyles.container}>
            <div>
              <h4>Balance</h4>
              <p className={balance < 0 ? balanceStyles.money_m : balanceStyles.money_p}>{balance}</p>
            </div>
            <div>
              <h4>Income</h4>
              <p className={balanceStyles.money_p}>{incomes}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className={balanceStyles.money_m}>{expenses}</p>
            </div>
          </div>
          <h3> History </h3>
          <TransactionList type = {0}/>
        </>
      );
};

export default Balance;