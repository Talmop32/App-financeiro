import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import Header from "./components/Header"
import Resume from "./components/Resume";
import GlobalStyle from "./styles/global";


const App = () => {
    const data = localStorage.getItem("transations");
    const [transationsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amountExpense = transationsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

    const amountIncome = transationsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) <Number(expense) ? "-" : ""}R$ $(total)`);

    }, [transationsList]);

    const handleAdd = (transaction) => {
        const newArryTransactions = [...transationsList, transaction];

        setTransactionsList(newArryTransactions);

        localStorage.setItem("transactions", JSON.stringify(newArryTransactions));

    };

    return (
        <>
    <Header />
    <Resume income={income} expense={expense} total={total} />
    <Form handleAdd = {handleAdd} transationsList={transationsList} setTransactionsList={transationsList}/>
    <GlobalStyle />
    </>
    );
};

export default App;