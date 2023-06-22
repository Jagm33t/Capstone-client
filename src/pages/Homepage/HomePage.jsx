import "./HomePage.scss";
import Home1 from "../../assets/images/home1.png";
import Home from "../../assets/images/Home.jpeg"
import homewallet from "../../assets/images/homewallet.png";
import homewallet2 from "../../assets/images/wallet2.png";
import buytems from '../../assets/images/buyitems.gif'
import track from '../../assets/images/track.gif';
import { Link } from 'react-router-dom';

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
    </div>
    
    </>
  )
}

export default HomePage