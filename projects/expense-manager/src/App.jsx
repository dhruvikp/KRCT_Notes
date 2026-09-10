import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMP_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMP_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses ];
    });
  };
  
  return (
    <div className="App">
      <NewExpense onExpenseAdded={addExpenseHandler} />
       <Expenses items={expenses} />
    </div>
  )
}

export default App
