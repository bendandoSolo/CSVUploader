import axios from 'axios';

export const TestAPI = async ({URL}) => {
    try {
        return await axios.get(URL, {
            responseType: 'text'
          });
    }
    catch (error) {
        alert('Error in TestAPI.js: ' + error);
        console.error(error);
    }
}