import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const Profileimage = () => {
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImageSrc(reader.result);
      });
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Button
        // variant="contained"
        component="label"
      >
        <Avatar
          alt="Profile Image"
          src={imageSrc}
          sx={{ width: 50, height: 50 }}
        />
        <input
          type="file"
          hidden
          onChange={handleImageChange}
          accept="image/*"
        />
      </Button>
    </Stack>
  );
};
