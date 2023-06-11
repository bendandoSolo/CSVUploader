import axios from 'axios';

export const TestAPI = async () => {
    try {
        return await axios.get('https://localhost:7165', {
            responseType: 'text'
          });
    }
    catch (error) {
        alert('Error in TestAPI.js: ' + error);
        console.error(error);
    }
}