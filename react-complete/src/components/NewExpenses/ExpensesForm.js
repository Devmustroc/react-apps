import React, {useState} from 'react';
import "./ExpenseForm.css";

const ExpensesForm = () => {
    const [enteredTitle, setEnteredTiltle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTiltle(event.target.value);
    };
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const [enteredDate, setEnteredDate] = useState('');
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-2-22" onChange={dateChangeHandler}/>
                </div>
                </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
)
};
export default ExpensesForm;