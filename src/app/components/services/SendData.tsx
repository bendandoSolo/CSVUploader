import axios from 'axios';

export const SendData = async ({URL, data} : {URL: string, data: string}) => {
    alert ('sending data finally working');
    console.log('SendData: ' + data);
    axios.post('https://localhost:7165/api/data?csvData=${data}')
    //axios.post('https://localhost:7165/api/data', data)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
    // try {
    //     return await axios.post('https://localhost:7165/api/data', null, {
    //         params: {
    //         csvData: 'your CSV string data'
    //       }
    //       });
    // }
    // catch (error) {
    //     alert('Error in TestAPI.js: ' + error);
    //     console.error(error);
    // }
}