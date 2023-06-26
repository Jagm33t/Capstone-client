import "./HomePage.scss";
import Home1 from "../../assets/images/home1.png";
import Home from "../../assets/images/Home.jpeg"
import homewallet from "../../assets/images/homewallet.png";
import homewallet2 from "../../assets/images/wallet2.png";
import buytems from '../../assets/images/buyitems.gif'
import track from '../../assets/images/track.gif';
import show from '../../assets/images/show.gif'
import { Link } from 'react-router-dom';
import BankingApp from "../../assets/images/BankingApp.png";
import sendgift from "../../assets/images/sendgift.gif";

function HomePage (){

  return (
    <>
    <div className="home-display">
      <div className="home-first">
        <h1 className="home-heading">
        Welcome to CardMute Wallet  Empowering Your Financial Wellness
        </h1>
          <p className="home-headingpara">Experience the future of effortless shopping with CardMute:
           your all-in-one digital wallet for seamless transactions and peace of mind. Say goodbye to carrying multiple cards and hello to secure convenience as CardMute securely stores your payment methods, loyalty cards, and digital coupons. </p>
           <img className="homewallet" src={homewallet} ></img>
           <Link to="/signup">
              <button className="home-signupbtn">Sign Up</button>
           </Link>
      </div>
      
     <div className="home-second">
       <div className="home-secondcontainer">
         <div className="home-seconddetails">
         <h1 className="home-heading2">
           CardMute: Pay faster, safer, easier.
           </h1>
         <p className="home-headingpara2">Simplify your payments and enjoy the convenience of paying quickly from your CardMute digital wallet, accepted at numerous locations worldwide. Say goodbye to fumbling for cards or sharing sensitive information – with CardMute, your payments are effortless and secure. Experience the freedom to pay instantly, wherever you go, with our seamless and widely accepted digital wallet solution.</p>
         </div>

         <img className="home-wallet2" src={homewallet2}></img>
         
       </div>
       
     </div>
   
     <div className="home-third">
       <div className="home-thirdcontainer">
         <div className="home-thirddetails">
         <h3 className="home-thirdhead">Experience Seamless Bliss with Cardmute Wallet: Unlock Exquisite Delights and Effortless Ticket Purchases!</h3>
         <img className="home-wallet2" src={track}></img> 
         <img className="home-wallet2" src={buytems}></img> 
         </div>
       </div>
     </div>
     <div className="home-fifth">
       
       <div className="home-fifthcontainer">
         <div className="home-fifthdetails">
         <img src={BankingApp} className="home-fifthpic1" ></img>
          <div className="home-fifthleft">
          <h2 className="home-fifthhead">
       Revolutionize Your Wallet Management: Simplify, Expand, and Control Your Cards!
       </h2>
          <p className="home-fifthpara">
          CardMute is the ultimate card management solution, providing a seamless way to expand your wallet's capabilities. Our platform offers a range of facilities to simplify the process of adding, deleting, and organizing your cards.
            With CardMute, adding new cards to your wallet is a breeze. Whether it's credit cards, debit cards, loyalty cards, or gift cards, our intuitive interface allows you to effortlessly input card details or scan barcodes for quick integration into your digital wallet.</p>
          </div>
     


         </div>
       </div>
     </div>
     <div className="home-fourth">
     <h2 className="home-fourthhead">Enhancing Privacy and Security: Protecting Your Identity with CardMute</h2>
       <div className="home-fourthcontainer">
         <div className="home-fourthdetails">
    
         <img className="home-wallet3" src={show}></img>
      
           <p className="home-fourthpara" >
Full advantage of the privacy and security built into website is taken by Wallet, which is designed to protect your identity and keep what’s yours yours.
When a purchase is made, a unique transaction code is used by CardMute, ensuring that your card number is never shared with a merchant or put on CardMute servers.
Physical cards or touch buttons in stores are not needed, eliminating the need to carry them and ensuring a safer experience.</p>
<exxport />
         </div>
       </div>
     </div>

  
     {/* <div className="home-sixth">
       
       <div className="home-sixthcontainer">
         <div className="home-sixthdetails">

         <img src={sendgift} className="home-sixthpic1" ></img>
          <div className="home-sixthleft">
          <h2 className="home-sixthhead">
       Revolutionize Your Wallet Management: Simplify, Expand, and Control Your Cards!
       </h2>
          <p className="home-sixthpara">
          CardMute is the ultimate card management solution, providing a seamless way to expand your wallet's capabilities. Our platform offers a range of facilities to simplify the process of adding, deleting, and organizing your cards.
            With CardMute, adding new cards to your wallet is a breeze. Whether it's credit cards, debit cards, loyalty cards, or gift cards, our intuitive interface allows you to effortlessly input card details or scan barcodes for quick integration into your digital wallet.</p>
          </div>
     


         </div>
       </div>
     </div> */}
    </div>
    
    </>
  )
}

export default HomePage