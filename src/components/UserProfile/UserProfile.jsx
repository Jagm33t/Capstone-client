import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./UserProfile.scss";

function UserProfile(props) {
  const { userData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [firstName, setFirstName] = useState("");
  const [validateFirstName, setValidateFirstName] = useState(false);
  const [lastName, setLastName] = useState("");
  const [validateLastName, setValidateLastName] = useState(false);
  const [streetNumber, setStreetNumber] = useState("");
  const [validateStreetNumber, setValidateStreetNumber] = useState(false);
  const [province, setProvince] = useState("");
  const [validateProvince, setValidateProvince] = useState(false);
  const [country, setCountry] = useState("");
  const [validateCountry, setValidateCountry] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validatePhoneNumber, setValidatePhoneNumber] = useState(false);
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [userName, setUserName] = useState("");
  const [validateUserName, setValidateUserName] = useState(false);
  const [password, setPassword] = useState("");
  const [validatePassword, setValidatePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(false);

  useEffect(() => {
    getAllUserProfile();
  }, []);

  function getAllUserProfile() {
    
    const userId = localStorage.getItem('userId')
    
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((res) => {
       
        const {
          first_name,
          last_name,
          street_number,
          province,
          country,
          phone_number,
          email,
          username,
          password,
          confirm_password,
        } = res.data;
        setFirstName(first_name);
        setLastName(last_name);
        setStreetNumber(street_number);
        setProvince(province);
        setCountry(country);
        setPhoneNumber(phone_number);
        setEmail(email);
        setUserName(username);
        setPassword(password);
        setConfirmPassword(confirm_password);
      
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }

  // Check if the form is valid
  const isFormValid = () => {
    if (
      !firstName ||
      !lastName ||
      !streetNumber ||
      !province ||
      !country ||
      !phoneNumber ||
      !email ||
      !userName ||
      !password ||
      !confirmPassword
    ) {
      return false;
    }
    return true;
  };

  const handleChangeInput = (setState) => (event) => {
    setState(event.target.value);
  };

  const validateField = (setState) => (event) => {
    if (event.target.value.length < 1) {
      setState(true);
    } else {
      if (event.target.name === "phoneNumber") {
        const phonePattern = /^\d+$/;
        if (!phonePattern.test(event.target.value)) {
          setState(true);
        } else {
          setState(false);
        }
        return;
      }
      if (event.target.name === "email") {
        const mailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!mailPattern.test(event.target.value)) {
          setState(true);
        } else {
          setState(false);
        }
        return;
      }
      setState(false);
    }
  };

  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (isFormValid()) {
      const postData = {
        first_name: event.target.firstName.value,
        last_name: event.target.lastName.value,
        street_number: event.target.streetNumber.value,
        province: event.target.province.value,
        country: event.target.country.value,
        phone_number: event.target.phoneNumber.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        confirm_password: event.target.confirmPassword.value,
      };
  
      function updateUserProfile() {
        const userId = localStorage.getItem('userId')
       
        axios
          .put(`http://localhost:8080/users/${userId}`, postData)
          .then((response) => {
            
            console.log("Data sent successfully");
            setIsModalOpen(false);
      window.location.reload(); 


            setIsModalOpen(false);
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          });
      }
  
      updateUserProfile();
    }
  };
  

  const modalContent = (
    <div className="modal">
      <div className="modal-content">
        <h2 className='modal-headedit'>Edit Profile</h2>
        <form className='modal-form' onSubmit={handleSubmit}>
          <div className='modal-formgrouprow'>
          <div className="modal-formgroup">
    <label className='modal-label' htmlFor="firstName">First Name</label>
    <input
      type="text"
      id="firstName"
      className="edit-profile-input"
      value={firstName}
      onChange={handleChangeInput(setFirstName)}
      onBlur={validateField(setValidateFirstName)}
    />
    <div
      className={
        validateFirstName
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateFirstName ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
  <div className="modal-formgroup">
    <label className='modal-label' htmlFor="lastName">Last Name</label>
    <input
      type="text"
      id="lastName"
      className="edit-profile-input"
      value={lastName}
      onChange={handleChangeInput(setLastName)}
      onBlur={validateField(setValidateLastName)}
    />
    <div
      className={
        validateLastName
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateLastName ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
      </div>
     </div>

   </div>
          <div className='modal-formgrouprow'>

          <div className="modal-formgroup">
    <label className='modal-label' htmlFor="streetNumber">Street Number</label>
    <input
      type="text"
      id="streetNumber"
      className="edit-profile-input"
      value={streetNumber}
      onChange={handleChangeInput(setStreetNumber)}
      onBlur={validateField(setValidateStreetNumber)}
    />
    <div
      className={
        validateStreetNumber
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateStreetNumber ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
  <div className="modal-formgroup">
    <label className='modal-label' htmlFor="province">Province</label>
    <input
      type="text"
      id="province"
      className="edit-profile-input"
      value={province}
      onChange={handleChangeInput(setProvince)}
      onBlur={validateField(setValidateProvince)}
    />
    <div
      className={
        validateProvince
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
       <p className={validateProvince ? "error-message" : "error-message--hidden"}>
        This field is required
       </p>
     </div>
     </div>
   </div>
          
   <div className='modal-formgrouprow'>
          <div className="modal-formgroup">
    <label className='modal-label' htmlFor="country">Country</label>
    <input
      type="text"
      id="country"
      className="edit-profile-input"
      value={country}
      onChange={handleChangeInput(setCountry)}
      onBlur={validateField(setValidateCountry)}
    />
    <div
      className={
        validateCountry
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateCountry ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
  <div className="modal-formgroup">
    <label className='modal-label' htmlFor="phoneNumber">Phone Number</label>
    <input
      type="text"
      id="phoneNumber"
      className="edit-profile-input"
      value={phoneNumber}
      onChange={handleChangeInput(setPhoneNumber)}
      onBlur={validateField(setValidatePhoneNumber)}
    />
    <div
      className={
        validatePhoneNumber
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validatePhoneNumber ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
            
</div>


<div className='modal-formgrouprow'>

<div className="modal-formgroup">
    <label className='modal-label' htmlFor="email">Email Address</label>
    <input
      type="email"
      id="email"
      className="edit-profile-input"
      value={email}
      onChange={handleChangeInput(setEmail)}
      onBlur={validateField(setValidateEmail)}
    />
    <div
      className={
        validateEmail
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateEmail ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
  <div className="modal-formgroup">
    <label className='modal-label' htmlFor="username">Username</label>
    <input
      type="text"
      id="username"
      className="edit-profile-input"
      value={userName}
      onChange={handleChangeInput(setUserName)}
      onBlur={validateField(setValidateUserName)}
    />
    <div
      className={
        validateUserName
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateUserName ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
</div>
<div className='modal-formgrouprow'>
<div className="modal-formgroup">
    <label className='modal-label' htmlFor="password">New Password</label>
    <input
      type="password"
      id="password"
      className="edit-profile-input"
      value={password}
      onChange={handleChangeInput(setPassword)}
      onBlur={validateField(setValidatePassword)}
    />
    <div
      className={
        validatePassword
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validatePassword ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
  <div className="modal-formgroup">
    <label className='modal-label' htmlFor="confirmPassword">Confirm New Password</label>
    <input
      type="password"
      id="confirmPassword"
      className="edit-profile-input"
      value={confirmPassword}
      onChange={handleChangeInput(setConfirmPassword)}
      onBlur={validateField(setValidateConfirmPassword)}
    />
    <div
      className={
        validateConfirmPassword
          ? "userform__fields-error"
          : "userform__fields-error form__fields-error--hide"
      }
    >
      {/* <img src={error} alt="error" /> */}
      <p className={validateConfirmPassword ? "error-message" : "error-message--hidden"}>
        This field is required
      </p>
    </div>
  </div>
</div>
  
  

  <div className="modal-buttons">
    <button type="submit"  className="modal-save-button" disabled={!isFormValid()}  >
      Save Changes
    </button>
    <button className="modal-cancel-button" onClick={() => setIsModalOpen(false)}>
      Cancel
    </button>
  </div>
</form>
</div>
</div>
);

return (
<>
  <div className="profile-details">
    <h1>User Details</h1>
    <button className="edit-button" onClick={handleEditButtonClick}>Edit</button>
    <div className="profile-content">
      <div className="profile-picdisplay">
        <img className="profilepic" src={userData.img} alt="Profile" />
      </div>
      <div className="profile-content__details">
        <p>Name: {userData.first_name} {userData.last_name}</p>
        <p>Address: {userData.street_number} {userData.address}, {userData.city}, {userData.province}, {userData.country}</p>
        <p>Contact Details: {userData.phone_number}</p>
        <p>Email Address: {userData.email}</p>
        <p>Username: {userData.username}</p>
        <p>Last Access: {userData.last_opened}</p>
        <p>Account Number (optional): {userData.account_number}</p>
      </div>
    </div>
  </div>
  {isModalOpen && modalContent}
</>
);
}

export default UserProfile;
