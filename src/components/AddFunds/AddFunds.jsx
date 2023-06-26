import React, { useState } from "react";
import "./AddFunds.scss";
import rbc from "../../assets/icons/rbc.png";
import scotia from "../../assets/icons/scotibank.png";
import cibc from "../../assets/icons/cibc.png";
import bmo from "../../assets/icons/bmo.png";
import emailjs from "emailjs-com";
import { emailJsConfig } from "../../config";

function AddFunds() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_email: email,
          user_name: name,
          message: message,
        },
        emailJsConfig.userId
      )
      .then((result) => {
        console.log(result.text);
        alert("Sent")
        // Handle success behavior here
      })
      .catch((error) => {
        console.error(error.text);
        // Handle error behavior here
      });

    // Reset the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="addfundsdisplay">
        <div className="bankaccount">
          <h2>From Bank Account</h2>
          {/* Bank account icons */}
          <div className="bankicons">
          <a href="https://secure.royalbank.com/statics/login-service-ui/index#/full/signin?_gl=1*lkhvoz*_ga*MTk3MTc0NzY4Mi4xNjg3NTQ4MjQw*_ga_89NPCTDXQR*MTY4NzU0ODI0MC4xLjEuMTY4NzU0ODMxOC42MC4wLjA.*_fplc*bVJBZVVVQ3lYcUpPUTlWQiUyRlRUdGU4b1JCdmdCdXE1Z3R3bm9hMkczN3I1RTZGTnJmUmxLVmJDOVJsTDBnTTNMRnpIRDRBZHNUMmUyZHBGNDhzMWgyekVVMDd1NnJzTWFhMWpqTjF0Qkp4eWRHS1Q1TFkyJTJCJTJCSTNQNUJRN1RnJTNEJTNE*_gcl_au*NTM2NjE1Mjc5LjE2ODc1NDgyNDA.&_ga=2.217308062.947155671.1687548241-1971747682.1687548240&LANGUAGE=ENGLISH" target="_blank">
  <img className="bank-icon" src={rbc} alt="RBC" />
</a>

<a href="https://auth.scotiaonline.scotiabank.com/online?oauth_key=uojtNcYjmC8&oauth_key_signature=eyJraWQiOiJrUFVqdlNhT25GWUVDakpjMmV1MXJvNGxnb2VFeXJJb2tCbU1oX3BiZXNVIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWZlcmVyIjoiaHR0cHM6XC9cL3d3dy5zY290aWFiYW5rLmNvbVwvIiwib2F1dGhfa2V5IjoidW9qdE5jWWptQzgiLCJjb25zZW50X3JlcXVpcmVkIjpmYWxzZSwicmVkaXJlY3RfdXJpIjoiaHR0cHM6XC9cL3d3dy5zY290aWFvbmxpbmUuc2NvdGlhYmFuay5jb21cL29ubGluZVwvbGFuZGluZ1wvb2F1dGhsYW5kaW5nLmJucyIsImV4cCI6MTY4NzU0OTYxMiwiaWF0IjoxNjg3NTQ4NDEyLCJqdGkiOiI5NDBhNGFkNy03MmU2LTRmZGUtODk5NS1iZWQzNDliNjUwOTciLCJjbGllbnRfaWQiOiI4ZWU5MGMzOS0xYzUyLTRmZjQtOGFlNi1hN2I1NGM1Mzk5MzMiLCJjbGllbnRfbWV0YWRhdGEiOnsiQ2hhbm5lbElEIjoiU09MIiwiQXBwbGljYXRpb25Db2RlIjoiSDcifSwiaXNzdWVyIjoiaHR0cHM6XC9cL3Bhc3Nwb3J0LnNjb3RpYWJhbmsuY29tIn0.ZIHQSx_wdxHt7pzcBeAm8k6Q5C7qPjJxzigcCc8nq2xBcN1xFgHf8MJg0U_kmn9ruq_TqgYqIzfhxzBp-UXZuCmoHnRlyesW2j25LUQxqBXxldpuDnr5lI2ZHX3_tm_gm9Aes35t-dhW__EObUfido3BgrjjEMaadWSusiI_mX-kYolqFiT40oQGvSmKcmJXEgzEGYGNt_3dbyY-Z1dJ-LZoOa_tiKV1hghzO1IrYkQOoRYxVFJUrrvrzx8MvwpMx24QGR69KShNytPzlRuloQdQOsAdLERBaVpkwKvaY4cNxeF0P1bwnu1nXy_5tpPXofvqIyEI7qdmrtUOi1KABQ&preferred_environment=" target="_blank">
  <img className="bank-icon" src={scotia} alt="Scotia" />
</a>

<a href="https://www.cibconline.cibc.com/ebm-resources/online-banking/client/index.html#/auth/signon?msgId=0008" target="_blank">
  <img className="bank-icon" src={cibc} alt="CIBC" />
</a>

<a href="https://www1.bmo.com/banking/digital/login?lang=en" target="_blank">
  <img className="bank-icon" src={bmo} alt="BMO" />
</a>


          </div>
        </div>
        <div className="etransfer">
          <h2>E-Transfer</h2>
          <div className="etransferemail">
            <h4>Enter email to get money request</h4>
            <form className="addfundform" onSubmit={sendEmail}>

              <label>
                <input
                  required
                  placeholder="Email"
                  type="email"
                  className="addfundinput__email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </label>
              <label>
                <textarea
                  required
                  placeholder="Message"
                  className="addfundinput__message"
                  value={message}
                  onChange={handleMessageChange}
                ></textarea>
              </label>
              <button className="sendlink" type="submit">
                Send link
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFunds;
