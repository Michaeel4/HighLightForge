/* 
  filename: Dropzone.js 
*/

import React from "react";
// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import "./Header.css";
const Header = ({ onDrop, accept }) => {
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


    <div className="header">
        <h1>HighLight Forge</h1>

                
    </div>
  );
};

export default Header;