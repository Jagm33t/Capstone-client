import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SendGift from "../SendGift/SendGift";
import axios from 'axios';
import "./Features.scss";
import UserProfile from "../UserProfile/UserProfile";
import AddFunds from "../AddFunds/AddFunds";
import ReceiveFunds from "../ReceiveFunds/ReceiveFunds";
import CheckBalance from "../CheckBalance/CheckBalance";
import ViewTransactions from "../ViewTransactions/ViewTransactions";
import Tools from "../Tools/Tools";


function Features (){
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [showSendGift, setShowSendGift] = useState(false);
  const [showReceiveMoney, setShowReceiveMoney] = useState(false);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleSendGiftButtonClick = () => {
    setActiveTab(6);
    setShowSendGift(true);
  };

  const handleReceiveButtonClick = () => {
    setActiveTab(2);
    setShowReceiveMoney(true);
  };
  const userId = 1; 
  useEffect(() => {
    const userId = 1;
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then(response => {
        const data = response.data;
        setUserData(data);
        console.log(data); // Example: Log the data to the console
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);
  
  return (
    <>
      { userData ? (
        <div  className="featuresdisplay">
          <div className="navbarleft">
            <div>
            <div className="profile-picnav">
              <img className="profilepic1" src={userData.img} alt="Profile Picture" /></div>
              <p className="profile-picnav__name">{userData.first_name}</p>
            </div>
            <div className="logout-container">
            <Link to="/"  className="navigationbtn__logout-btn" >Logout</Link>
    </div>
            <button className="navigationbtn" onClick={() => handleTabClick(0)}>User Profile</button>
            <button className="navigationbtn" onClick={() => handleTabClick(1)}>Add Money</button>
            <button className="navigationbtn" onClick={() => handleTabClick(2)}>Receive Money</button>
            <button className="navigationbtn" onClick={() => handleTabClick(3)}>Check Balance</button>
            <button className="navigationbtn" onClick={() => handleTabClick(4)}>View transactions</button>
            <button className="navigationbtn" onClick={() => handleTabClick(5)}>Tools</button>
            <button className="navigationbtn" onClick={() => handleTabClick(6)}>Send Money</button>


            <div>
            <h1>jatt</h1>
          </div>
          </div>
          
          <div className="usercontent">
            {activeTab === 0 && (
             <div>
               <UserProfile userData={userData}/ >
             </div>
            )}
            {activeTab === 1 && (
              <div>
               
                <AddFunds/>
              </div>
            )}
            {activeTab === 2 && (
              <div>
               <ReceiveFunds />
              </div>
            )}
            {activeTab === 3 && (
              <div>
              <CheckBalance
                userData={userData}
                onSendGiftButtonClick={handleSendGiftButtonClick}
                onReceiveMoneyButtonClick={handleReceiveButtonClick}
              />
            </div>
            )}
            {activeTab === 4 && (
              <div>
               <ViewTransactions/>
              </div>
            )}
            {activeTab === 5 && (
              <div>
                <Tools/>
              </div>
            )}
            {activeTab === 6 && (
              <div>
   
                <SendGift />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div class="loader">
        <p class="loadingtext">
        <span class="letter letter1">L</span>
        <span class="letter letter2">o</span>
        <span class="letter letter3">a</span>
        <span class="letter letter4">d</span>
        <span class="letter letter5">i</span>
        <span class="letter letter6">n</span>
        <span class="letter letter7">g</span>
        <span class="letter letter8">.</span>
        <span class="letter letter9">.</span>
        <span class="letter letter10">.</span>
        </p>
      </div>
      )}
    </>
  );
}

export default Features;