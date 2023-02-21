import './ExpensItem.css'  // import css file

function ExpenseItem() {
    const ExpanseDate = new Date(2023, 2, 21);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
            </div>
            <div
                className="expense-item__price">$294.67
            </div>
        </div>
    );   // return JSX
}

export default ExpenseItem; // export component