import React from 'react';
import './Signup.scss';

function Signup() {
  return (
    <>
    <div className="signup-container">
    <form className="signup-form">
        <p className="signup-title">Register</p>
        <p className="signup-message">Signup now and get full access to our app.</p>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="signup-input firstname" />
            <span className='spanfirstname'>Firstname</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="signup-input lastname" />
            <span className='spanlastname'>Lastname</span>
          </label>
        </div>

        <label>
          <input required placeholder="" type="email" className="signup-input email" />
          <span>Email</span>
        </label>

        <label>
          <input required placeholder="" type="password" className="signup-input password" />
          <span>Password</span>
        </label>
        <label>
          <input required placeholder="" type="password" className="signup-input confirmpassword" />
          <span>Confirm password</span>
        </label>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="signup-input username" />
            <span className='spanfirstname'>Username</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="signup-input phone" />
            <span className='spanphone'>Phone</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="signup-input streetname" />
            <span className='spanstreetname'>Street num</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="signup-input city" />
            <span className='spancity'>City</span>
          </label>
        </div>
        <div className="flex">
          <label>
            <input required placeholder="" type="text" className="signup-input province" />
            <span className='spanprovince'>Province</span>
          </label>

          <label>
            <input required placeholder="" type="text" className="signup-input country" />
            <span className='spancountry'>Country</span>
          </label>
        </div>
        <button className="signup-btn">Submit</button>
        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
    </div>
      
    </>
  );
}

export default Signup;
