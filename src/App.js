import React from 'react';
import Balance from './components/balance-view';
import Expenses from './components/expense-view/expenses-total';
import ExpensesList from './components/expense-view/expense-list';
import AddExpense from './components/expense-view/add-expense';
import { AppProvider } from './context/AppContext';
import Income from './components/income-view/income';
import logo from './bankup.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <span className="logo row d-flex justify-content-center mt-5">
          <img src={logo} className="logo" alt="logo" />
        </span>
        <div>
          <div className="row mt-5 d-flex justify-content-center">
            <div className="col-6">
              <Balance />
            </div>
          </div>
          <div className="row mt-2 d-flex justify-content-center">
            <div className="col-md-2">
              <Income />
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-2">
              <Expenses />
            </div>
          </div>
        </div>

        <h3 className='mt-5'>Expenses</h3>
        <h5 className='mt-5'>Add New Expense</h5>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpense />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-sm'>
            <ExpensesList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
