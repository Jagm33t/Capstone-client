import React, { useState } from 'react';
import './ExpenseTracker.scss';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const addExpense = () => {
    if (newExpense && newAmount) {
      const expense = {
        id: new Date().getTime().toString(),
        title: newExpense,
        amount: parseFloat(newAmount),
      };
      setExpenses((prevExpenses) => [...prevExpenses, expense]);
      setNewExpense('');
      setNewAmount('');
    }
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="expense-tracker">
      <div className="expense-form">
      <label for="expense">Expense:</label>
<input
  type="text"
  id="expense"
  placeholder="Expense"
  value={newExpense}
  onChange={(e) => setNewExpense(e.target.value)}
/>

<label for="amount">Amount:</label>
<input
  type="number"
  id="amount"
  placeholder="Amount"
  value={newAmount}
  onChange={(e) => setNewAmount(e.target.value)}
/>
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        {expenses.length > 0 ? (
          <ul className='expense-ul'>
            {expenses.map((expense) => (
              <li className='expense-option' key={expense.id}>
                <span>{expense.title}</span>
                <span>${expense.amount.toFixed(2)}</span>
                <button onClick={() => deleteExpense(expense.id)}>Del</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses recorded.</p>
        )}
      </div>
      <div className="expense-summary">
        <h3 className='expense-subhead'>Expense Summary</h3>
        <p>Total Expenses: ${totalExpense.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ExpenseTracker;
