import React, { useEffect, useState } from 'react';
import './CheckBalance.scss';
import axios from 'axios';

function CheckBalance(props) {
  const { userData, onSendGiftButtonClick ,onReceiveMoneyButtonClick } = props;

const [fromCurrency, setFromCurrency] = useState('USD');
const [toCurrency, setToCurrency] = useState(''); 
const[amount, setAmount] = useState(userData.balance); 
const   [changeDisplay, setChangeDisplay] = useState(''); 

const handleSendButtonClick = () => {
  onSendGiftButtonClick();
};
const handleReceiveButtonClick = () => {
  onReceiveMoneyButtonClick();
};

function handleToCurrencyChange(event){
console.log(event.target.value);
  setToCurrency(event.target.value)
}
  const fetchData = async () => {

    console.log(userData.balance);
    
    if (fromCurrency && toCurrency && amount) {
      const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {
          from: "USD",
          to: toCurrency,
          q: userData.balance
        },
        headers: {
          'X-RapidAPI-Key': '013f92388fmsh87c6dcd7849dbbap1cccacjsn4ff57e91995a',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log('response.data',response.data)
        setChangeDisplay(amount * response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    
  }, [toCurrency]);


  const BalanceDisplay = () => {
    const [currentAmount, setCurrentAmount] = useState(0);
    const finalAmount = userData.balance;
    const duration = 2000; 
    const framesPerSecond = 30; 

    useEffect(() => {
      const increment = finalAmount / (duration / 1000) / framesPerSecond;
      let count = 0;

      const interval = setInterval(() => {
        if (count < finalAmount) {
          count += increment;
          setCurrentAmount(Math.floor(count));
        } else {
          setCurrentAmount(finalAmount);
          clearInterval(interval);
        }
      }, 1000 / framesPerSecond);

      return () => clearInterval(interval);
    }, []);

    return (
      <>
        <h3 className="balance-head">Wallet Balance</h3>
      
        <div className="balance-amount">
          <p className="balance-amount__display">{changeDisplay || currentAmount}  </p>
           <h1 className='balance-amount__currency' > {toCurrency} </h1>
        </div>
        <div className="pending-balance">
          <p className="pending-balance__head">Pending Balance:</p>
          <p className="pending-balance__amount">300.00 $</p>
        </div>
        <label htmlFor="toCurrency">Check your balance in different currency:</label>
        <select
          id="toCurrency"
          name="toCurrency"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
   <option value="select" >Select</option>       
  <option value="SGD">Singapore Dollar (SGD)</option>
  <option value="MYR">Malaysian Ringgit (MYR)</option>
  <option value="EUR">Euro (EUR)</option>
  <option value="USD">United States Dollar (USD)</option>
  <option value="AUD">Australian Dollar (AUD)</option>
  <option value="JPY">Japanese Yen (JPY)</option>
  <option value="CNH">Chinese Yuan (CNH)</option>
  <option value="HKD">Hong Kong Dollar (HKD)</option>
  <option value="CAD">Canadian Dollar (CAD)</option>
  <option value="INR">Indian Rupee (INR)</option>
  <option value="DKK">Danish Krone (DKK)</option>
  <option value="GBP">British Pound Sterling (GBP)</option>
  <option value="RUB">Russian Ruble (RUB)</option>
  <option value="NZD">New Zealand Dollar (NZD)</option>
  <option value="MXN">Mexican Peso (MXN)</option>
  <option value="IDR">Indonesian Rupiah (IDR)</option>
  <option value="TWD">Taiwan Dollar (TWD)</option>
  <option value="THB">Thai Baht (THB)</option>
  <option value="VND">Vietnamese Dong (VND)</option>
</select>
      </>
    );
  };

  return (
    <div className="balance-firstcontainer">
      <BalanceDisplay />
      <div className="balance-btn">
        <button className="balance-btn__send" onClick={handleSendButtonClick}>Send</button>
        <button className="balance-btn__Recieve" onClick={handleReceiveButtonClick} >Receive</button>
      </div>
    </div>
  );
}

export default CheckBalance;
