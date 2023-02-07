import React, { useState } from "react";
import { useEffect } from "react";
import { TextField } from "@mui/material";

const AddImageSrc = ({ index, setFamilyPhotoSrc }) => {
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    setFamilyPhotoSrc((familyPhotosSrc) => ({
      ...familyPhotosSrc,
      [index]: imageSrc,
    }));
  }, [index, imageSrc, setFamilyPhotoSrc]);

  return (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="Family Photo Src"
      fullWidth
      variant="standard"
      value={imageSrc}
      onChange={(e) => setImageSrc(e.target.value)}
    />
  );
};

export default AddImageSrc;
