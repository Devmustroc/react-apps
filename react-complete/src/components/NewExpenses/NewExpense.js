import React from 'react';
import './NewExpenses.css'
import ExpensesForm from "./ExpensesForm";

const newExpense = (data) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        data.onAddExpense(expenseData);
        console.log(expenseData);
    };
    return(
    <div className="new-expense">
        <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    )
};

export default newExpense;