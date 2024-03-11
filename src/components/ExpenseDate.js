function ExpenseDate(props){

const day = props.date.toLocaleString('en-US',{day:'2-digit'})
const month = props.date.toLocaleString('en-US',{day:'2-digit'})
const year = props.date.getFullYear();

return (<div className='date'>
    <div>{year}</div>/
    <div>{month}</div>/
    <div>{day}</div>
</div>
);

}

export default ExpenseDate;
