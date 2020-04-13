import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnMouseScroll = ({ bwImage, colourImage }) => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect: first param is a function which
  // is called when a component mounts
  useEffect(
    () => {
      window.addEventListener('scroll', scrollHandler);
      setInView(isInView());
      setIsLoading(false);
      return () => {
        // returns a function that is called when component unmounts
        window.removeEventListener('scroll', scrollHandler);
      };
    },
    // second param is any state or props that will
    // trigger re-run of the first function
    [isLoading]
  );

  const scrollHandler = () => {
    setInView(isInView());
  };

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top > 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  return isLoading ? null : (
    <img
      src={inView ? colourImage : bwImage}
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default ImageToggleOnMouseScroll;
