import TransactionForm from "../TransactionForm";
import TransactionList from "../TransactionList";

const IncomeList = () => {

    return (
        <>
        <h3> Add new income </h3>
        <TransactionForm type={true}/>
        <h3> History </h3>
        <TransactionList type = {1}/>
        </>
    )
};


export default IncomeList