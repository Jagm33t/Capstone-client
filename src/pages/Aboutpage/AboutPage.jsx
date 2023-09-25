import React from 'react';
import './AboutPage.scss';
import bankcard from "../../assets/images/bankcard.gif"
import diallogin from "../../assets/images/diallogin.gif"

const AboutPage = () => {
  return (
    <div>
       <h1 className='abouthead' >About Us</h1>
      <section className="section-1">
        <div className="content">
         
          <p>Welcome to CardMute, the game-changing website that is revolutionizing the way you shop online. We understand the concerns you have about privacy, the excessive use of plastic in physical gift cards, and the security of your credit card information. That's why we have developed the perfect solution for you.
          Join us today and embark on a path to financial wellness. With CardMute, you can build a solid foundation for your financial future and create a life of financial security and well-being.
          </p>
        </div>
      </section>

      <section className="section-2">
        <div className="content-2">
          <div className='section-2__first'>
          <p className='section-2__para1'>No Wellness Without Financial Wellness</p>
          <p className='section-2__para2'>we believe that there is no wellness without financial wellness. We understand the crucial role financial stability plays in overall well-being, and we're here to support you on your journey to financial wellness.
           Our website provides you with the tools and resources you need to take control of your finances. Whether it's managing your expenses, tracking your income, or setting financial goals, CardMute is your partner in achieving financial well-being.</p>
          </div>
         
          <img className='diallogin' src={diallogin} alt='diallogin'></img>
         
       
         </div>
      </section>

      <section className="section-3">
        <div className="content">
          {/* <h1>Instant Money Transfer</h1>
          <p>Surprise your loved ones with thoughtful gifts anytime, anywhere. Our website allows you to send money to anyone in the world. Simply use our "send money" option and share the unique code with your recipient. They can then use this code on any website that accepts gift cards. It's never been easier to spread joy and connect with your loved ones through seamless digital gifting.</p> */}
        </div>
      </section>

      <section className="section-4">
        <div className="content">
          {/* <h1>In-Person Shopping Made Easy</h1>
          <p>Tired of carrying multiple cards and remembering PINs? With CardMute, in-person shopping becomes a breeze. Simply log into your website account, select the "in-person payments" option, and experience a whole new level of convenience. Scan the store's barcode, enter the desired amount, confirm the transaction with a 4-digit password or facial recognition, and you're done! Say hello to a secure and hassle-free shopping experience.</p> */}
        </div>
      </section>

      <section className="section-5">
        <div className="content">
          {/* <h1>Enhanced Security and Peace of Mind</h1>
          <p>We understand the importance of protecting your sensitive information. Rest assured, our cutting-edge website ensures the highest level of security for your credit card details. With CardMute, your worries about fraud and unauthorized access are a thing of the past. Embrace peace of mind and join our growing community of satisfied customers. Sign up today and unlock a world of hassle-free transactions and worry-free shopping.</p> */}
        </div>
      </section>

      <section className="section-6">
        <div className="content">
          {/* <h1>Financial Wellness Starts Here</h1>
          <p>There is no wellness without financial wellness. At CardMute, we believe in empowering individuals to take control of their financial well-being. With our innovative e-credit card system, you can bid farewell to worries about reordering new credit cards or potential security breaches. Experience the freedom of a digital card that automatically expires once the transaction is complete. Say hello to financial freedom and embark on a worry-free shopping journey with CardMute.</p> */}
        </div>
      </section>

     <section className='section-7'>
       <div className='content'>

         <div className='section-7display'>
         <p className='section-7para'>Eco-Friendly Approach: By reducing the reliance on physical gift cards and emphasizing digital transactions, CardMute promotes an eco-friendly approach to shopping. This initiative can contribute to minimizing environmental impact by reducing plastic waste associated with traditional gift cards.</p>
         <img src={bankcard} className="bankcarddelete" alt="bankcarddelete" />
         </div>
         
       </div>
     </section>
    </div>
  );
};

export default AboutPage;
