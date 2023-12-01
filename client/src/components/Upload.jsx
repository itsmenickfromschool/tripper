import React, {useState} from "react";
import { FileUploader } from "react-drag-drop-files";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../utils/mutations";

const fileTypes = ["JPG", "PNG", "GIF"];

function Upload() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [userImg, setUserImg] = useState();
  const handleChange = async (e) => {
    
    try {
      e.preventDefault();
      console.log(userImg);
      console.log(userImg.type);
      console.log(userImg.name);
      // const file = e.target.files[0];
      
      // console.log(file);
      const { data } = await uploadFile({
        variables: {
          file: userImg, // Pass the actual file here
        }
      });
      console.log("File uploaded successfully:", data.singleUpload);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <>
    <input id="upload-image" onChange={(e)=>setUserImg(e.target.files[0])} type="file"/>
    <button onClick={handleChange}>Upload Image</button>
    </>
  );
}

export default Upload;