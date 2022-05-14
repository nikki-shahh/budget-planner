import React from 'react';
import Balance from './components/balance-view';
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
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <Balance />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm d-flex justify-content-center">

          </div>
          <div className="col-sm d-flex justify-content-center">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
