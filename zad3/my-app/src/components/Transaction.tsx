import React from "react";
import { useRecoilState } from "recoil";
import { transactionListState } from "../recoil/recoil_state";
import ITransaction from "../types/ITransaction";
import transactionStyles from "./Transaction.module.css";

interface ITransactionProps {
    item: ITransaction;
};

const Transaction = ( { item } : ITransactionProps ) => {
    const [transactions, setTransactions] = useRecoilState(transactionListState);

    const removeTransaction = () => {
        const newTransactions = transactions.filter((transaction) => transaction.id !== item.id);
        setTransactions(newTransactions);
    };
    
    return (
        <div className={transactionStyles.container}>
          <p>{item.name}</p>
          <p className={ item.money < 0 ? transactionStyles.money_m : transactionStyles.money_p }>{item.money}</p>
          <button className={transactionStyles.btn} onClick={removeTransaction}>Remove</button>
        </div>
      );
};

export default Transaction;