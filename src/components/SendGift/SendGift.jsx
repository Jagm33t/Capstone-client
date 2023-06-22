import React, { useState } from "react";
// import "./SendGift.scss";
import { Link } from 'react-router-dom';

function SendGift() {
  
const [amount, setAmount] = useState('');
  const [code, setCode] = useState(null);
  
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
    // Function to generate a random 3-digit number
    return Math.floor(Math.random() * 900) + 100;
  };
  
  const generateRandomcode = () => {
    // Function to generate and display a code, expiration date, and 3-digit number
    const codeNumber = generatecodeNumber();
    const expirationDate = generateExpirationDate();
    const threeDigitNumber = generateThreeDigitNumber();
  
    setCode({
      codeNumber,
      expirationDate,
      threeDigitNumber,
      amount,
    });
  };
  return (
    <>
   
  <div className="onlinepay">
      <h1>Random Codes</h1>
     <div>
     <label htmlFor="amount">Amount to Add:</label>
       <input
          type="number"
          id="amount"
          min="0"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button id="generateButton" onClick={generateRandomcode}>
        Generate Code
      </button>
      <div id="result">
        {code && (
          <>
            <p>
              <strong>Code:</strong> {code.codeNumber}
            </p>
            <p>
              <strong>Expiration Date:</strong> {code.expirationDate}
            </p>
            <p>
              <strong>3-Digit Number:</strong> {code.threeDigitNumber}
            </p>
            <p>
              <strong>Amount:</strong> ${code.amount}
            </p>
          </>
        )}
      </div>
      <div>

        
 

      </div>
    </div>
    

    </>
  );
}

export default SendGift;
