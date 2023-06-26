import React, { useEffect, useState } from 'react';
import './ViewTransactions.scss';
import axios from 'axios';

function ViewTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/transactions')
      .then(response => {
        // Sort transactions in descending order based on date
        console.log("transdata", response.data)
        const sortedTransactions = response.data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        console.log("sorted", sortedTransactions)
        setTransactions(sortedTransactions);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  function checkType(type) {
    if (type === 'receive') {
      return 'balance-received';
    } else {
      return 'balance-sent';
    }
  }

  function handleRefresh() {
    window.location.reload();
  }

  return (
    <>
      <div className='balance-secondcontainer'>
        <div className='balance-second__head'>
          <p className='balance-second__head1'>Transaction History</p>
          <p className='balance-second__head2' onClick={handleRefresh}>
            Refresh
          </p>
        </div>
        <div className='balance-second__subhead'>
          <p className='balance-second__subhead1'>Date</p>
          <p className='balance-second__subhead2'>Details</p>
          <p className='balance-second__subhead3'>Amount</p>
        </div>
        <div className='balance-second__details'>
          <ul className='balance-second__ul'>
            {transactions.length === 0 ? (
              <li className='balance-second__single'>
                <p>Loading...</p>
              </li>
            ) : (
              transactions.map(transaction => {
                // Format the date string
                const transactionDate = new Date(transaction.date);
                const formattedDate = transactionDate.toLocaleString('en-US', {
                  month: 'long',
                  day: 'numeric'
                });

                return (
                  <li className='balance-second__single' key={transaction.id}>
                    <p>{formattedDate}</p>
                    <p className={checkType(transaction.type)}>
                      {transaction.type}
                    </p>
                    <p>{transaction.company}</p>
                    <p>${transaction.amount}</p>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ViewTransactions;
