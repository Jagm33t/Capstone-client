import axios from 'axios';

function getUserData(jwtToken) {
  return axios.get('http://localhost:8080/users/me', {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
}

export default getUserData