import './ExpensItem.css'  // import css file

function ExpenseItem(data) { // function component
    const month = data.date.toLocaleString('en-US', {month: 'long'});
    const year = data.date.getFullYear();
    const day = data.date.toLocaleString('en-US', {day: '2-digit'});

    return (<div className="expense-item">
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className="expense-item__description">
            <h2>{data.title}</h2>
        </div>
        <div className="expense-item__price">${data.amount}
        </div>
    </div>);   // return JSX
}

export default ExpenseItem; // export component