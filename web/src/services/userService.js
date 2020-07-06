import axios from 'axios';

const apiEndPoint = 'http://localhost:3333/api/users';

export async function registerUser(user) {
    try {
        return await axios.post(apiEndPoint, user);
    } catch (err) {
        return { err };
    }
}