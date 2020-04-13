import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseover = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        bwImage="/static/speakers/bw/Speaker-187.jpg"
        colourImage="/static/speakers/colour/Speaker-187.jpg"
        alt="Speaker-187"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        bwImage="/static/speakers/bw/Speaker-823.jpg"
        colourImage="/static/speakers/colour/Speaker-823.jpg"
        alt="Speaker-823"
      />
    </div>
  );
};

export default ImageChangeOnMouseover;
