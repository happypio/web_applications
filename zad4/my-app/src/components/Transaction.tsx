import { useRecoilState } from "recoil";
import { transactionListState } from "../recoil/recoil_state";
import ITransaction from "../types/ITransaction";

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";
import Divider from '@mui/material/Divider';
import { lightGreen,  red} from '@mui/material/colors';

interface ITransactionProps {
    item: ITransaction;
};

const Transaction = ( { item } : ITransactionProps ) => {
    const [transactions, setTransactions] = useRecoilState(transactionListState);

    const removeTransaction = () => {
        const newTransactions = transactions.filter((transaction) => transaction.id !== item.id);
        setTransactions(newTransactions);
    };
    const t_color = item.money >=0 ? lightGreen[700] : red[900];
    return (
      <>
      <ListItem
          style={{background: '#e6f5ff'}}
          secondaryAction={
            <Tooltip title="Delete transaction">
              <IconButton edge="end" aria-label="delete" onClick={removeTransaction}>
                <DeleteIcon />
            </IconButton>
            </Tooltip>
            
          }
      >
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: t_color }}>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.money} secondary={item.name} sx={{ color: t_color }}/>
      </ListItem>
      <Divider />
      </>
      );
};

export default Transaction;