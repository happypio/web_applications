import { useSetRecoilState} from "recoil";
import { v4 } from "uuid";
import { transactionListState } from "../recoil/recoil_state";
import { useForm } from 'react-hook-form';
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const TransactionForm = ({type} : {type: boolean}) => { // type=True -> income Form, type=False expense Form

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
    const setTransactions = useSetRecoilState(transactionListState);
      const onSubmit = (data : any) => {
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            {id: v4(), name: data["description"], money: Number(data["value"])}
        ]);
      };
    const mini = type ? 0 : -10000;
    const maxi = type ? 10000 : 0;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ flexGrow: 2, width: "100%"}}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField
              required
              id="filled-required"
              label="Description"
              placeholder="Enter description..."
              variant="filled"
              {...register("description", { required: true, maxLength: 40 })}
              helperText={
                errors.description?.type === "required" ? (
                  <p>Please enter the description.</p>
                ) : errors.description?.type === "maxLength" ? (
                  <p>Maximum length is 40!</p>
                ) : null
              }
            />
            </Grid>
            <Grid item xs={4}>
            <TextField
              required
              id="filled-number"
              label="Value"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              {...register("value", { required: true, min: mini, max: maxi })}
              placeholder="Enter value..."
              variant="filled"
              helperText={
                errors.value?.type === "required" ? (
                  <p>Please enter the value.</p>
                ) : errors.value?.type === "min" ||
                  errors.value?.type === "max" ? (
                  <p>
                    Value must be in range {type ? "[0-10000]" : "[-10000-0]"}.
                  </p>
                ) : null
              }
            />
            </Grid>
            <Grid item xs={2}>
            <Tooltip title="Add transaction">
              <IconButton edge="end" aria-label="delete" type="submit">
                <AddIcon />
              </IconButton>
            </Tooltip>
            </Grid>
        </Grid>
      </Box>
      </form>
    );
};


export default TransactionForm