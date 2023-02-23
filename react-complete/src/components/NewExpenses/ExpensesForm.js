import React, {useState} from 'react';
import "./ExpenseForm.css";

const ExpensesForm = () => {
    const [enteredTitle, setEnteredTiltle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',  // This is the initial state
    //     enteredDate: '',  // This is the initial state
    //     enteredAmount: '' // This is the initial state
    // })  // object destructuring for the state using useState hook
    const titleChangeHandler = (event) => {
        setEnteredTiltle(event.target.value);
        // setUserInput({
        //     ...userInput,  // spread operator for copying the previous state
        //     enteredTitle: event.target.value  // This is the new state
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput, // spread operator for copying the previous state
        //     enteredAmount: event.target.value // This is the new state
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, eneteredAmount: event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.date}
        // })
    }
    return (<form>
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
    </form>)
};
export default ExpensesForm;