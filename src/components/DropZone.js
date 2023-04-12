/* 
  filename: Dropzone.js 
*/

import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";
const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (


    <div className="dropzone-div" {...getRootProps()}>

      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Simply drag and drop your video here and let the magic happen!
          </p>
        )}
      </div>

    </div>
  );
};

export default Dropzone;