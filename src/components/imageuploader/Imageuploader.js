// import React, { useState } from 'react';
// import { Button } from '@mui/material';

// export const Profileimage = () => {
//   const [image, setImage] = useState(null); // State to hold the selected image

//   // Handler called when a file is selected
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file.type.substr(0, 5) === "image") {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result); // Set the image URL for display
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImage(null); // Reset the image if a non-image file is selected
//     }
//   };

//   return (
//     <div>
//       {/* File Input Button */}
//       <Button
//         variant="contained"
//         component="label" // Allows the button to act as a label for the hidden file input
//       >
//         Upload Image
//         <input
//           type="file"
//           hidden
//           onChange={handleFileChange}
//           accept="image/*" // Accept only image files
//         />
//       </Button>

//       {/* Image Display */}
//       {image && <img src={image} alt="Selected" style={{ marginTop: 20, maxWidth: "100%", height: "auto" }} />}
//     </div>
//   );
// }