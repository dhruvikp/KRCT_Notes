import { createContext, useReducer } from 'react';
 
const ExpensesContext = createContext({
  items: [],
  addExpense: () => {},
  deleteExpense: () => {},
});
 
const DUMP_EXPENSES = [
  { id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  { id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2023, 2, 28) },
  { id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) },
];
 
function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
 
export function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMP_EXPENSES);
 
  const addExpenseHandler = (expense) => {
    dispatch({ type: 'ADD', payload: expense });
  };
  const deleteExpenseHandler = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };
 
  const contextValue = {
    items: expensesState,
    addExpense: addExpenseHandler,
    deleteExpense: deleteExpenseHandler,
  };
 
  return (
    <ExpensesContext.Provider value={contextValue}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContext;
