import React, {useState} from 'react'; // import react
import ExpansesDate from './ExpenseDate'; // import component
import '../UI/ExpensItem.css';  // import css file

function ExpenseItem(data) {
    const [title, setTitle] = useState(data.title);  // useState hook return array with 2 elements
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };
        return (<div className="expense-item">
            <ExpansesDate date={data.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">${data.amount}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>);   // return JSX
    }

    export default ExpenseItem; // export component