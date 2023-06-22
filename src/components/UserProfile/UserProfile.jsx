import "./UserProfile.scss";

function UserProfile (props){
  const { userData } = props;
  return(
    <>
     <div className="profile-details">
                <h1>User Details</h1>
                <button className="edit-button">Edit</button>
              <div className="profile-content">
                  <div className="profile-picdisplay">
                    <img className="profilepic" src={userData.img} alt="Profile Picture" />
                    </div>
                  <div className="profile-content__details">
                    <p>Name: {userData.first_name}{userData.last_name}</p>
                    <p>Address:{userData.street_number} {userData.permanent_address},{userData.city},{userData.province},{userData.country}</p>
                    <p>Contact Details: {userData.phone_number}</p>
                   <p>Email Address: {userData.email}</p>                
                   <p>Username: {userData.username}</p>
                   <p>Last Acess: {userData.last_opened}</p>
                   <p>Account Num(optional): {userData.account_number}</p>
                  </div>
                
     
       
   
                 

     
                </div>
                
              </div>
    </>
  )
}

export default UserProfile