import React from 'react';
import '../UI/NewExpense.css';

const ExpensesForm = (props) => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="new-expense__actions"></div>
    </form>
};
export default ExpensesForm;