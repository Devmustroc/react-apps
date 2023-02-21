import './ExpensItem.css'  // import css file

function ExpenseItem(data) { // function component
    const expanseDate = new Date(2021, 2, 28); // create date
    const expenseTitle = 'Car Insurance'; // create title
    const expenseAmount = 294.67;
    return (<div className="expense-item">
        <div>{data.date.toUTCString()}</div>
        <div className="expense-item__description">
            <h2>{data.title}</h2>
        </div>
        <div className="expense-item__price">${data.amount}
        </div>
    </div>);   // return JSX
}

export default ExpenseItem; // export component