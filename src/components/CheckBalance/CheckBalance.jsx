import React, {useEffect , useState} from 'react';
import "./CheckBalance.scss";
import axios from "axios";

function CheckBalance(){

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/transactions')
      .then(response => {
        setTransactions(response.data);
        console.log(transactions)
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

  return(
    <>
    <div className='balance-firstcontainer'>
    <h3 className='balance-head'>Wallet Balance</h3>
    <div className="balance-amount">
    <p className="balance-amount__display">2000.00 $</p> 
    </div>
    <div className="pending-balance">
    <p className="pending-balance__head">Pending Balance :</p>
    <p className="pending-balance__amount">300.00 $</p>
    </div>
    <div className="balance-btn">
      <button className="balance-btn__send">Send </button>
      <button className="balance-btn__Recieve">Receive</button>
    </div>
    </div>
    <div className='balance-secondcontainer'>
      <div className='balance-second__head'>
        <p className='balance-second__head1'>Transaction History</p>
        <p className='balance-second__head2'>Refresh</p>
      </div>
      <div className='balance-second__subhead'>
        <p className='balance-second__subhead1'>Date</p>
        <p className='balance-second__subhead2'>Details</p>
        <p className='balance-second__subhead3'>Amount</p>
      </div>
      <div className='balance-second__details'>
      <ul className='balance-second__ul'>
  {transactions.length === 0 ? (
    <li className="balance-second__single">
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
        <li className="balance-second__single" key={transaction.id}>
          <p>{formattedDate}</p>
          <p className={checkType(transaction.type)}>{transaction.type}</p>
          <p>{transaction.company}</p>
          <p>{transaction.amount}</p>
        </li>
      );
    })
  )}
</ul>
      </div>
      

    </div>
    </>
  )
}

export default CheckBalance