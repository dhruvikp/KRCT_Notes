import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ExpenseItem from './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

import {ExpensesContextProvider} from './context/expenses-context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/about', element: <About /> },
    ],
  },
]);



const App = () => {
  return (
    <ExpensesContextProvider>
      <RouterProvider router={router} />
    </ExpensesContextProvider>
     
  )
}

export default App
