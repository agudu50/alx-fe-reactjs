import axios from 'axios';

//Fecting Github user data by username
export const fetchUserData = async(userName) => {
    const url = `https://api.github.com/users/${userName}`;
    const response = await axios.get(url);
    return response.data;
}