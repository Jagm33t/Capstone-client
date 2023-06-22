import "./ReceiveFunds.scss";
import React, { useState } from "react";

function ReceiveFunds() {
  const [activeSection, setActiveSection] = useState("addRecipient");

  function toggleSection(section) {
    setActiveSection(section);
  }

  return (
    <div class="recievecard">
      <div className="receivefunds-display">
      <h2>Interac e-Transfer</h2>
      <div className="section-toggle">
        <button
          id="addRecipientBtn"
          onClick={() => toggleSection("addRecipient")}
          className={activeSection === "addRecipient" ? "active" : ""}
        >
          Add Recipient
        </button>
        <button
          id="makeRequestBtn"
          onClick={() => toggleSection("makeRequest")}
          className={activeSection === "makeRequest" ? "active" : ""}
        >
          Make a Request
        </button>
      </div>

      {activeSection === "addRecipient" && (
        <div className="section1" id="addRecipientSection">
          <h3>Add Recipient</h3>
          <div className="request-form">
            <label htmlFor="recipientName">Name:</label>
            <input
              placeholder="Enter Name"
              className="requstinput"
              type="text"
              name="recipientName"
              id="recipientName"
              required
            />

            <label htmlFor="recipientNickname">Nickname:</label>
            <input
              placeholder="Enter Nickname"
              className="requstinput"
              type="text"
              name="recipientNickname"
              id="recipientNickname"
              required
            />

            <label htmlFor="recipientEmail">Email:</label>
            <input
              placeholder="Enter Email"
              className="requstinput"
              type="email"
              name="recipientEmail"
              id="recipientEmail"
              required
            />

            <label htmlFor="recipientMobile">Mobile:</label>
            <input
              placeholder="Enter Mobile"
              className="requstinput"
              type="tel"
              name="recipientMobile"
              id="recipientMobile"
              required
            />

            <label htmlFor="notifyRecipient">Notify Recipient by:</label>
            <select
              className="requstinput"
              name="notifyRecipient"
              id="notifyRecipient"
              required
            >
              <option value="">Select notification method</option>
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>

            <label htmlFor="preferredLanguage">Preferred Language:</label>
            <select
              className="requstinput"
              name="preferredLanguage"
              id="preferredLanguage"
              required
            >
              <option value="">Select preferred language</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>

            
          </div>
          <button className="request-link">Continue</button>
        </div>
      )}

      {activeSection === "makeRequest" && (
        <div className="section2" id="makeRequestSection">
          <h3>Make a Request</h3>
          <div className="request-form">
            <label htmlFor="requestRecipient">Request Money From:</label>
            <select
              className="requstinput"
              name="requestRecipient"
              id="requestRecipient"
              required
            >
              <option value="">Select recipient</option>
              <option value="">Emily</option>
              <option value="">Michael</option>
              <option value="">Emmat</option>
              <option value="">Daniel</option>

            </select>

            <label htmlFor="depositAccount">Deposit Money To:</label>
            <select
              className="requstinput"
              name="depositAccount"
              id="depositAccount"
              required
            >
               <option value="chequing">Select</option>
              <option value="chequing">Current</option>


            </select>

            <label htmlFor="requestAmount">Amount:</label>
            <input
              placeholder="Enter Amount"
              className="requstinput"
              type="number"
              name="requestAmount"
              id="requestAmount"
              step="0.01"
              required
            />

            <label htmlFor="requestPaymentDate">Request Payment Date:</label>
            <input
              placeholder="Select Request Date"
              className="requstinput"
              type="date"
              name="requestPaymentDate"
              id="requestPaymentDate"
            />

            <label htmlFor="requestInvoiceNumber">Invoice Number:</label>
            <input
              placeholder="Enter Invoice Number (optional)"
              className="requstinput"
              type="text"
              name="requestInvoiceNumber"
              id="requestInvoiceNumber"
            />

            <label htmlFor="requestMessage">Message:</label>
            <textarea
              placeholder="Enter Message (optional)"
              className="requstinput"
              name="requestMessage"
              id="requestMessage"
              maxLength="400"
            ></textarea>

             
          </div>
          <button className="request-link">Send</button>
        </div>
      )}
    </div>
</div>
    
  );
}

export default ReceiveFunds;
