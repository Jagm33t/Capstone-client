import React, { useState } from "react";
import "./AddFunds.scss";
import rbc from "../../assets/icons/rbc.png";
import scotia from "../../assets/icons/scotibank.png";
import cibc from "../../assets/icons/cibc.png";
import bmo from "../../assets/icons/bmo.png";
function AddFunds() {
  

  return (
    <>
   <div className="addfundsdisplay">
   <div className="bankaccount">
     <h2>From Bank Acount</h2> 
     <div className="bankicons">
       
          <img className="bank-icon" src={rbc} alt="RBC"></img>
          <img className="bank-icon" src={scotia} alt="Scotia"></img>
          <img className="bank-icon" src={cibc} alt="CIBC"></img>
          <img className="bank-icon" src={bmo} alt="BMO"></img>
     </div>
   
     
     </div>
   <div className="etransfer">
     <h2>E-Transfer</h2>
     <div className="etransferemail">
       <h4>Enter email to get money request </h4>
       <label>
          <input required placeholder="Email" type="email" className="signup-input__email" />
        </label>
        <button className="sendlink">Send link</button>

     </div>
     </div>
   </div>
      
    </>
  );
}

export default AddFunds;
