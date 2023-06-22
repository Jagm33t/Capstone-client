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



function Features (){
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
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
      <button className="navigationbtn__logout-btn" >Logout</button>
    </div>
            <button className="navigationbtn" onClick={() => handleTabClick(0)}>User Profile</button>
            <button className="navigationbtn" onClick={() => handleTabClick(1)}>Add Money</button>
            <button className="navigationbtn" onClick={() => handleTabClick(2)}>Receive Money</button>
            <button className="navigationbtn" onClick={() => handleTabClick(3)}>Check Balance</button>
            <button className="navigationbtn" onClick={() => handleTabClick(4)}>View transactions</button>
            <button className="navigationbtn" onClick={() => handleTabClick(5)}>Mobile Payments</button>
            <button className="navigationbtn" onClick={() => handleTabClick(6)}>Send Gifts</button>
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
               <ReceiveFunds/>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <CheckBalance/>
              </div>
            )}
            {activeTab === 4 && (
              <div>
                <h1>View transaction history</h1>
              </div>
            )}
            {activeTab === 5 && (
              <div>
                <h1>Mobile Payments</h1>
              </div>
            )}
            {activeTab === 6 && (
              <div>
                <h1>Send Gifts</h1>
                <SendGift />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </>
  );
}

export default Features;