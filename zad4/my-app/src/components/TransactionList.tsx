import { useRecoilValue} from "recoil";
import { transactionListState } from "../recoil/recoil_state";
import Transaction from  "./Transaction"

import List from '@mui/material/List';

const TransactionList = ({type} : {type : number}) => {
    const transactions = useRecoilValue(transactionListState)

    return (
      <>
        <List
          style={{background: '#e6f5ff'}}
          sx={{ width: "100%", height: "60%", position: 'relative',
            overflow: 'auto' }}
        >
            {transactions.map((transaction) =>
                type * transaction.money >= 0 ? (<Transaction key={transaction.id} item={transaction}/>) : null
            )}
        </List>
      </>
    );
};

export default TransactionList;