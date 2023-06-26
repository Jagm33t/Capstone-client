import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrencyConverter.scss';
import Calculator from '../Calculator/Calculator';

const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const fetchData = async () => {
    if (fromCurrency && toCurrency && amount) {
      const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/exchange',
        params: {
          from: fromCurrency,
          to: toCurrency,
          q: amount
        },
        headers: {
          'X-RapidAPI-Key': '013f92388fmsh87c6dcd7849dbbap1cccacjsn4ff57e91995a',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setConversionResult(amount * response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [fromCurrency, toCurrency, amount]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };
  
    return (
      
      <div className="currency-converter-container">
       
      <form className="currency-form" onSubmit={handleSubmit}>
        <label htmlFor="fromCurrency">From:</label>
        <select
          id="fromCurrency"
          name="fromCurrency"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
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

<label htmlFor="toCurrency">To:</label>
        <select
          id="toCurrency"
          name="toCurrency"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
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

<label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />
  
          <button type="submit">Convert</button>
        </form>
  
        {conversionResult && (
         <div className="conversion-result">
            <h3>Conversion Result:</h3>
            <p>{conversionResult}</p>
          </div>
        )}
      </div>
   );
  };

export default CurrencyConverter
