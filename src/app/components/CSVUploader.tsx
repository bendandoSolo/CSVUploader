'use client'
import React, {useState, useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { TestAPI } from './services/TestAPI';

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
             sendData(binaryStr);
            }
            reader.readAsText(file)
        })
    }, [])

    const sendData = (binaryStr: any) => {
        alert('we want to send the data to the backend here...and move this to services folder');
    }

    const testService = async ()  => {
        let response = await TestAPI();
        if (response)
            alert(response.data);
        else    
            alert('ERROR: no response');
    }

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div>
            <h1 className='font-bold text-2xl'>We want to use drop zone to import and pass the contents of a csv to a backend...</h1>
            
            <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            // isDragActive ?
            // <p>Drop the files here ...</p> :
            <div className='border-red-600 border-4 p-32'> <p>Drag and Drop some files here, or click to select files</p></div>
           
            
        }
        </div>
        <div className='border-emerald-600 border-2 p-32'>
            {File ?
                <>{JSON.stringify(File)}</> : <>Awaiting Data</>
            }
        </div>

            <h2 className='font-bold text-5xl'>RoadMap</h2>

            <h2>We want to be able to configure which backend we are passing the data to</h2>
            <p>Need a field to import the url for upload</p>
            <p>Need a drop down to specify the how the data will be passed...</p>
            <button className='bg-green-500' onClick={testService}>Test service</button>
        </div>
    );
};

export default CSVUploader;

// TOTAL = 15
// TOTAL= 35.25			
// TOTAL = 48.75 		
// TOTAL = 57.25		
// TOTAL = 70.25			
// TOTAL = 77.25 
//  TOTAL = 85 				
// TOTAL = 93.5				
// TOTAL = 115.5 				
// TOTAL = 125.5 :				
// TOTAL = 136 				
//     TOTAL = 146 			
// TOTAL = 156.5 			
//     really = 161.5 				
//     = 196.5					
//     = 226.5 				
//     = 253.5 				
//     = 278.5 					
//     = 297				
//     =   306.5				
//     = 315.5 	
//     = 323.5 
//     = 333 				
//     = 345.5 	
//     = 357.5 			
//      = 375 			
//      = 386.5 			
//         = 408.5 					
//           = 433.5hrs					
//         hours = 464.5 			
//         TOTAL : 477				
//         TOTAL 491 				
//      TOTAL 508.5 	

//      15hrs        
//      20.25hrs     
//      13.5 hours   
//      8.5 hours    
//      13.5 hours   
//      7 hours      
//      7.75 hours   
//      8.5 hours    
//      22 hours     
//      10 hours     
//      10.5 hours   
//      10hours      
//      10.5 hours   
//      5 hours      
//      35 hours     
//      30 hours     
//      27 hours     
//      25 hours     
//      18.5 hours   
//      9.5 hours    
//      9 hours      
//      8 hours      
//      9.5 hours    
//     12.5 hours    
//     12 hours      
//      17.5 hrs     
//      11.5 hrs     
//      22           
//      25           
//      31           
//     12.5 hours    
//      14hrs        
//     17.5          

// week 1
// week 2
// week 3
// week 4
// week 5
// week 6
// week 7
// week 8
// week 9
// week 10
// week 11
// week 12
// week 13
// week 14
// week 15 
// week 16 
// week 17 
// week 18
// week 19
// week 20
// week 21
// week 22
// week 23
// week 24
// week 25
// week 26
// week 27
// week 28
// week 29
// week 30
// week 31
// Week 32
// Week 33

