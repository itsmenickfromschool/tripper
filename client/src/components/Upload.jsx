import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useMutation } from '@apollo/client';
import { UPLOAD_FILE } from '../utils/mutations'

const fileTypes = ["JPG", "PNG", "GIF"];

function Upload() {
  const [file, setFile] = useState(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);


  const handleChange = async (file) => {
    setFile(file);
    console.log(file);
    try {
      await uploadFile({ variables: { file } });
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };
    return (
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
    )
  }
  
  export default Upload