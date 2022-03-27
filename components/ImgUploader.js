import { Box } from "@mui/material";
import React, { useState } from "react";

const ImgUploader = ({children}) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  return (
    <Box>
      <img style={{ width: "300px" }} src={createObjectURL} />
      <input type="file" id="file" name="myImage" onChange={uploadToClient} />
      <label htmlFor="file">
       {children}
      </label>
    </Box>
  );
};

export default ImgUploader;
