'use client'
import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { TestAPI, SendData } from './services';

const API_URL = 'https://localhost:7165/';

const CSVUploader = () => {

    const [File, setFile] = useState<string | ArrayBuffer | undefined>(undefined);
    const onDrop = useCallback((acceptedFiles: any) => {

        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader()
    
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
            // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
            if (binaryStr)
                setFile(binaryStr);
                sendDataToAPI(binaryStr);
            }
            reader.readAsText(file)
        })
    }, [])

    const sendDataToAPI = async (binaryStr: any) => {
        const response = await SendData({URL: API_URL, data: binaryStr});
            if (!!response)
            alert( 'response: ' + response.data);
        else    
            alert('ERROR: no response');
    }

    const testService = async ()  => {
        const response = await SendData({URL: API_URL, data: 'test data'});
        if (!!response)
            alert('Response(should be test data): ' + response.data);
        else    
            alert('ERROR: no response');
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <>
        <h1 className='font-bold text-2xl pb-5'>CSV File Uploader</h1>

        <label htmlFor='backend-url'>Backend URL: </label>
        <input id='backend-url' type='text' placeholder='https://localhost:7165/' 
         onClick={()=> {alert('not implemented'); }}/>
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                <div className='border-red-600 border-4 p-32'>{!isDragActive ? <p>Drag and Drop some files here, or click to select files</p> : <p>Dragging</p> }</div>
            }
        </div>
        <div className='border-emerald-600 border-2 p-32'>
            {File ? <>{JSON.stringify(File)}</> : <>Awaiting Data</>}
        </div>

        <h2 className='font-bold text-5xl'>RoadMap</h2>
        <h2>Work out why hot reloading is not working?</h2>
        <h2>We want to be able to configure which backend we are passing the data to</h2>
        <p>Need a field to import the url for upload</p>
        <p>Need a drop down to specify the how the data will be passed...</p>
        <button className='bg-green-500' onClick={testService}>Test service</button>
    </>
    );
};

export default CSVUploader;
