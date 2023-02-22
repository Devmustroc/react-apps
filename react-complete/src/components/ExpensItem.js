import ExpansesDate from './ExpenseDate'; // import component
import './ExpensItem.css';  // import css file

function ExpenseItem(data) { // function component
    const clickHandler = () => {
        console.log("clicked");
    };
    return (<div className="expense-item">
        <ExpansesDate date={data.date}/>
        <div className="expense-item__description">
            <h2>{data.title}</h2>
        </div>
        <div className="expense-item__price">${data.amount}
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </div>);   // return JSX
}

export default ExpenseItem; // export component