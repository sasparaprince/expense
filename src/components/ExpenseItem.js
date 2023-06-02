import './ExpenseItem.css'
function ExpenseItem() {
  const expanseDate = new Date(2021 , 2 , 28);
  const expanseTitle = 'car insurance';
  const expansePrice = 200

  return (
    <>
    <div className="expense-item">
    <div className='expense-item__date'>{expanseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expanseTitle}</h2>
        <div className="expense-item__price">${expansePrice}</div>
      </div>
    </div>
     
    </>
  );
}
export default ExpenseItem;
