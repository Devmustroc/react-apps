import './ExpensItem.css'  // import css file

function ExpenseItem() {
    const expanseDate = new Date(2023, 2, 21);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    return (<div className="expense-item">
        <div>{expanseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
        </div>
        <div className="expense-item__price">${expenseAmount}
        </div>
    </div>);   // return JSX
}

export default ExpenseItem; // export component