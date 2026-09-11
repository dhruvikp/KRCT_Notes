import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import ExpenseContext from '../../context/expenses-context';
import { useContext } from 'react';
 
function NewExpense(props) {
const expenseCtx = useContext(ExpenseContext);

const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  expenseCtx.addExpense(expenseData);
};


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
export default NewExpense;
