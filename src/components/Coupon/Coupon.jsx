import React, { useState } from 'react';
import './Coupon.scss';

function CouponGeneration() {
  const [couponAmount, setCouponAmount] = useState('');
  const [generatedCoupon, setGeneratedCoupon] = useState('');

  const handleCouponAmountChange = (e) => {
    setCouponAmount(e.target.value);
  };

  const generateCoupon = () => {
    // Generate a random coupon code
    const couponCode = Math.random().toString(36).substr(2, 8);

    // Calculate the expiration date (approximately 1 month from the current date)
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);

    // Format the expiration date as a string
    const expirationDateString = expirationDate.toDateString();

    // Add the coupon code, amount, and expiration date to the generated coupon string
    const generatedCouponString = `Coupon Code: ${couponCode}\nAmount: $${couponAmount}\nExpiration Date: ${expirationDateString}`;

    setGeneratedCoupon(generatedCouponString);
  };

  return (
    <div className="coupon-container">
      <h2 className="coupon-title">Coupon Generation</h2>

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={couponAmount}
        onChange={handleCouponAmountChange}
      />

      <button className="coupon-btn"
      onClick={generateCoupon}>
         <span className="couponbtn-text-one">Generate</span>
       <span className="couponbtn-text-two"> Coupon</span>
        </button>

      {generatedCoupon && (
        <div>
          <h3 className='coupongenhead'>Generated Coupon:</h3>
          <pre>{generatedCoupon}</pre>
        </div>
      )}
    </div>
  );
}

export default CouponGeneration;
