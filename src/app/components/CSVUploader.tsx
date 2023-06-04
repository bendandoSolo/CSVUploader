'use client'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const CSVUploader = () => {

    const onDrop = useCallback((acceptedFiles: any) => {
        // Do something with the files

       // console.log(acceptedFiles);
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div>
            <h1 className='font-bold text-2xl'>We want to use drop zone to import and pass the contents of a csv to a backend...</h1>
            
            <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <div className='border-red-600 border-4 p-32'> <p>Drag and Drop some files here, or click to select files</p></div>
           
            
        }
        </div>
        <div className='border-emerald-600 border-2 p-32'><p>Here we have a sections to display the data that we upload...</p></div>

            <h2 className='font-bold text-5xl'>RoadMap</h2>

            <h2>We want to be able to configure which backend we are passing the data to</h2>
            <p></p>
        </div>
    );
};

export default CSVUploader;