import React, { useRef } from 'react';

const ImageToggleOnMouseOver = ({ bwImage, colourImage }) => {
  const imageRef = useRef(null);

  return (
    <img
      src={bwImage}
      onMouseOver={() => {
        imageRef.current.src = colourImage;
      }}
      onMouseOut={() => {
        imageRef.current.src = bwImage;
      }}
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
