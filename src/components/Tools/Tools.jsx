import React from 'react';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import Calculator from '../Calculator/Calculator';
import ExpenseTracker from '../ExpenseTracker/ExpenseTracker';
import './Tools.scss';

function Tools() {
  return (
    <div className="tools-container">
      <div className="tools-card">
      <h1 className='tools-head'>Currency converter</h1>
        <CurrencyConverter />
      </div>
      <div className="tools-card">
        <h1 className='tools-head'>Calculator</h1>
        <Calculator />
      </div>
      <div className="tools-card">
      <h2 className='tools-head'>Expense Tracker</h2>
        <ExpenseTracker/>
      </div>
    </div>
  );
}

export default Tools;
