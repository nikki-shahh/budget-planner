import React from 'react';
import Balance from './components/balance-view';
import Expenses from './components/expense-view/expenses-total';
import Income from './components/income-view/income-total';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <span className="row mt-5">
        <h2 className="col-sm">Budget Planner</h2>
        <h2 className="col-sm d-flex justify-content-end">Welcome</h2>
      </span>
      <div>
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-lg-6">
            <Balance />
          </div>
        </div>
        <div className="row mt-2 d-flex justify-content-center">
          <div className="col-lg-2">
            <Expenses />
          </div>
          <div className="col-lg-2">
          </div>
          <div className="col-lg-2">
            <Income />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
