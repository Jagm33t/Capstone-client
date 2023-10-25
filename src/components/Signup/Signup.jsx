import React, { useState } from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  // Define states for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [streetName, setStreetName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');

  // Function to handle input changes
  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can access all the input values here:
    const userData=({
      first_name: firstName,
      last_name: lastName,
      street_number: streetName,
      city: city,
      province: province,
      country: country,
      phone_number: phone,
      email: email,
      username: username,
      password: password,
      confirm_password: confirmPassword,
      img:'profilepic.jpeg',
      balance:'',
      last_opened:'',
      last_payment:'',
      last_payment_date:'2023-06-11',
      last_month_expense:'',
     
    });
    
    console.log("userdata", userData)
    axios.post('http://localhost:8080/users/new', userData)
      .then((response) => {
        // Handle the response from the backend if needed
       
       
        alert("Signup successful")
      window.location.href = '/login';
      })
      .catch((error) => {
        // Handle errors if the request fails
        console.error(error);
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <p className="signup-title">Register</p>
          <p className="signup-message">Signup now and get full access to our app.</p>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input firstname"
                value={firstName}
                onChange={(e) => handleInputChange(e, setFirstName)}
              />
              <span className="spanfirstname">Firstname</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input lastname"
                value={lastName}
                onChange={(e) => handleInputChange(e, setLastName)}
              />
              <span className="spanlastname">Lastname</span>
            </label>
          </div>

          <label>
            <input
              required
              placeholder=""
              type="email"
              className="signup-input email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              className="signup-input password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
            />
            <span>Password</span>
          </label>
          <label>
            <input
              required
              placeholder=""
              type="password"
              className="signup-input confirmpassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e, setConfirmPassword)}
            />
            <span>Confirm password</span>
          </label>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input username"
                value={username}
                onChange={(e) => handleInputChange(e, setUsername)}
              />
              <span className="spanfirstname">Username</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input phone"
                value={phone}
                onChange={(e) => handleInputChange(e, setPhone)}
              />
              <span className="spanphone">Phone</span>
            </label>
          </div>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input streetname"
                value={streetName}
                onChange={(e) => handleInputChange(e, setStreetName)}
              />
              <span className="spanstreetname">Street num</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input city"
                value={city}
                onChange={(e) => handleInputChange(e, setCity)}
              />
              <span className="spancity">City</span>
            </label>
          </div>
          <div className="flex">
            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input province"
                value={province}
                onChange={(e) => handleInputChange(e, setProvince)}
              />
              <span className="spanprovince">Province</span>
            </label>

            <label>
              <input
                required
                placeholder=""
                type="text"
                className="signup-input country"
                value={country}
                onChange={(e) => handleInputChange(e, setCountry)}
              />
              <span className="spancountry">Country</span>
            </label>
          </div>
          <button type="submit" className="signup-btn">
            Submit
          </button>
          <p className="signin">
            Already have an account? <Link to="/login">Sign in</Link>.
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;
