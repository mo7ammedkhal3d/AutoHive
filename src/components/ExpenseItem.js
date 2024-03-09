import './ExpenseItem.css';

function ExpenseItem(){
return (<div className="expence-item">
    <div>
        {expenceDate.toDateString()}
    </div>
    <div className="expence-item__description">
        <h2>{expencetitle}</h2>
        <div className="expence-item__price">${expenceAmount}</div>
    </div>
</div>)
}

export default ExpenseItem;
