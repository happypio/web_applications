import { useRecoilValue} from "recoil";
import { transactionListState } from "../recoil/recoil_state";
import Transaction from  "./Transaction"
import Balance from "./Balance";
import TransactionForm from "./TransactionForm";
import transactionListStyles from "./TransactionList.module.css";

const TransactionList = () => {

    const transactions = useRecoilValue(transactionListState)
    return (
        <>
        <Balance />
        <TransactionForm />
        <h3> History </h3>
        <div className={transactionListStyles.container}>
            {transactions.map((transaction) => (
                <Transaction item={transaction}/>
            ))}
        </div>
        </>
    )
};


export default TransactionList