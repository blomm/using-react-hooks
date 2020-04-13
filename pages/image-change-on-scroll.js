import React from 'react';
import ImageToggleOnMouseScroll from '../src/ImageToggleOnMouseScroll';

const ImageChangeOnScroll = () => {
  return (
    <>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnMouseScroll
              bwImage={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              colourImage={`/static/speakers/colour/Speaker-${speakerId}.jpg`}
            />
          </div>
        );
      })}
    </>
  );
};

export default ImageChangeOnScroll;
