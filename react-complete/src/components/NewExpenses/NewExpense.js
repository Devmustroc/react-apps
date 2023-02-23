import React from 'react';
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const newExpense = () => {
    return(
    <div className="new-expense">
        <ExpensesForm/>
    </div>
    )
};

export default newExpense;