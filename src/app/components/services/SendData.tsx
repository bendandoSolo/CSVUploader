import axios from 'axios';

export const SendData = async ({URL, data} : {URL: string, data: string}) => {
    console.log('SendData: ' + data);
     return await axios.post(`https://localhost:7165/api/data?csvData=${data}`)
}