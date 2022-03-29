import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";

const ExpenseList = () => {

    return (
        <>
        <h3> Add new expense </h3>
        <TransactionForm type={false} />
        <h3> History </h3>
        <TransactionList type = {-1}/>
        </>
    )
};


export default ExpenseList