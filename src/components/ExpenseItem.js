import './ExpenseItem.css';

function ExpenseItem(props){

    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const month = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear();

return (<div className="expense-item">
    <div className='date'>
        <div>{year}</div>/
        <div>{month}</div>/
        <div>{day}</div>      
    </div>
    <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </div>
</div>)
}

export default ExpenseItem;
