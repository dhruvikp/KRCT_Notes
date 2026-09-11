import { useDispatch } from 'react-redux';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
 
function ExpenseItem(props) {
  const dispatch = useDispatch();
 
  const deleteHandler = () => {
    dispatch({ type: 'DELETE', payload: props.id });
  };
 
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item_description'>
          <h2>{props.title}</h2>
          <div className='expense-item_price'>${props.amount}</div>
        </div>
        <button onClick={deleteHandler}>Delete</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
