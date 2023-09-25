import React, { useState } from 'react';
import "./OrderButton.scss";

function OrderButton({ generateRandomcode }) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 10000);
    }
    generateRandomcode();
  };

  return (
    <button className={isAnimating ? 'order animate' : 'order'} onClick={handleClick}>
      <span className="default">Send Money</span>
      <span className="success">Money sent<svg viewBox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </svg></span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
  );
}

export default OrderButton;
