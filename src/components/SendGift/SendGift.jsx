import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import "./SendGift.scss";
import OrderButton from "../OrderButton/OrderButton";


function SendGift() {
  const [balance, setBalance] = useState('');
  useEffect(() => {
    getUsersBalance();
  }, []);

  function getUsersBalance() {
    const userId = localStorage.getItem('userId')
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((res) => {
        const { balance } = res.data;
        setBalance(balance);
       
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }

  const [amount, setAmount] = useState('');
  const [code, setCode] = useState(null);
  const [isSending, setIsSending] = useState(false); // State to track if sending money is in progress

  const generatecodeNumber = () => {
    // Function to generate a code
    let ccNumber = '';
    for (let i = 0; i < 16; i++) {
      ccNumber += Math.floor(Math.random() * 10);
    }
    return ccNumber;
  };

  const generateExpirationDate = () => {
    // Function to generate a random expiration date
    const currentYear = new Date().getFullYear();
    const expirationYear = currentYear + Math.floor(Math.random() * 6);
    const expirationMonth = Math.floor(Math.random() * 12) + 1;

    let monthString = expirationMonth.toString();
    if (expirationMonth < 10) {
      monthString = '0' + monthString;
    }

    return monthString + '/' + expirationYear.toString().substr(-2);
  };

  const generateThreeDigitNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
  };

  const generateRandomcode = () => {
    const codeNumber = generatecodeNumber();
    const expirationDate = generateExpirationDate();
    const threeDigitNumber = generateThreeDigitNumber();

    setCode({
      codeNumber,
      expirationDate,
      threeDigitNumber,
      amount,
    });

    setIsSending(true); 

    console.log("dsds", amount)

   function addTransactions(){
   axios.
   post('http://localhost:8080/transactions', {amount})
   .then ((response) =>{
    console.log("postresponse",response);

  })
  .catch((error) => {
    console.error(error);
  })
 
}

addTransactions();

    setTimeout(() => {
      const postData = balance - amount;

      function updateBalance() {
        console.log("amount1", amount);
        console.log("balance1",balance);
        const userId = localStorage.getItem('userId')
        axios
          .put(`http://localhost:8080/users/${userId}/updatebalance`, { balance: postData })
          .then((response) => {
            console.log("response",response);
            console.log("Data sent successfully");
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            setIsSending(false); 
          });
      }

      updateBalance();
    }, 9000);
  };

  return (
    <>
      <div className="onlinepay">
      <h1 className='sendmmoney-heading'>Send Money</h1>
        <div className="sendmoneyfield">
          <p>Select the person you want to send money to:</p>
          <div>
            <label className='sendmoney-label' htmlFor="payee">Payee:</label>
            <select id="payee">
              <option value="choose">Select</option>
              <option value="john">john</option>
              <option value="emily">Emily</option>
              <option value="michael">Michael</option>
              <option value="emma">Emma</option>
              <option value="daniel">Daniel</option>
              <option value="olivia">Olivia</option>
              <option value="matthew">Matthew</option>
              <option value="sophia">Sophia</option>
            </select>
          </div>
          <div>
            <label className='sendmoney-label' htmlFor="amount">Enter Amount:</label>
            <input
              type="number"
              id="amount"
              min="0"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <OrderButton generateRandomcode={generateRandomcode} />
        {isSending ? (
          <p className='sendmoney-wait'>Sending money... Please wait.</p>
        ) : (
          code && (
            <div id="result">
              <p>
                <strong>Amount Sent:</strong> ${code.amount}
              </p>
            </div>
          )
        )}
     
      

      </div>
    </>
  );
}

export default SendGift;
