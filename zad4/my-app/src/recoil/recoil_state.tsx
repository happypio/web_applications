import { atom, selector } from "recoil";
import ITransaction from "../types/ITransaction";

const transactionListState = atom<ITransaction[]>({
    key: 'transactionList',
    default: []
});

const infoTransactionListState = selector({
    key: 'infoTransactionList',
    get: ({get}) => {
        const transactions = get(transactionListState)
        let incomes_array = transactions.filter((transaction) => transaction.money > 0);
        let expenses_array = transactions.filter((transaction) => transaction.money < 0);

        let incomes = incomes_array.reduce((a, b) => a + b.money, 0);
        let expenses = expenses_array.reduce((a, b) => a + b.money, 0);

        return {
            incomes: incomes,
            expenses: expenses,
            balance: incomes + expenses
      };
    },
  });

export {
    transactionListState,
    infoTransactionListState,
};