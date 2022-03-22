import React, { useState } from "react";
import { useSetRecoilState} from "recoil";
import { v4 } from "uuid";
import { transactionListState } from "../recoil/recoil_state";
import transactionFormStyles from "./TransactionForm.module.css";

const TransactionForm = () => {
    const [in_name, setIn_name] = useState("");
    const [in_value, setIn_value] = useState("");

    const setTransactions = useSetRecoilState(transactionListState);

    const onChange_n = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIn_name(e.target.value);
      };
    
    const onChange_v = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setIn_value(e.target.value);
      };
    
    const addTransaction = () => {
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            {id: v4(), name: in_name, money: Number(in_value)}
        ])
        setIn_name("");
        setIn_value("");
    };
    
    return (
      <>
        <h3> Add new expense / income </h3>
          <div className={transactionFormStyles.container}>
            
              <input className={transactionFormStyles.input} value={in_name} onChange={onChange_n} placeholder="Enter description..."/>
              <input className={transactionFormStyles.input} value={in_value} onChange={onChange_v} placeholder="Enter amount..."/>
              
          </div>
          <button className={transactionFormStyles.btn} onClick={addTransaction}>Add</button>
      </>
      );
};


export default TransactionForm