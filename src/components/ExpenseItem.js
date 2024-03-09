import './ExpenceItem.css';

function ExpenceItem(){
const expenceDate = new Date(2024,2,28);
const expencetitle = 'Car Insurance';
const expenceAmount = 294.76;

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

export default ExpenceItem;
