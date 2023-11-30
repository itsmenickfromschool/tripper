import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { useMutation } from "@apollo/client";
import { UPLOAD_FILE } from "../utils/mutations";

const fileTypes = ["JPG", "PNG", "GIF"];

function Upload() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const handleChange = async (file) => {
    try {
      
      console.log(file);
      const { data } = await uploadFile({
        variables: {
          file: file, // Pass the actual file here
        },
        context: {
          fetchOptions: { method: "POST" },
        },
      });
      console.log("File uploaded successfully:", data.singleUpload);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default Upload;