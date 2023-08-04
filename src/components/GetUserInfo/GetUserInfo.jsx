import axios from 'axios';

// Pass the user ID as an argument to the function
function getUserData(jwtToken, userId) {
  // Use the `userId` argument in the URL to fetch specific user data
  return axios.get(`http://localhost:8080/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
}

export default getUserData;
