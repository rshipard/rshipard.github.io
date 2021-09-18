import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function checkScrollHeight() {

  if (window.scrollY + window.innerHeight <= 1500) {
    console.log(0)
    return 0
  } else if (window.scrollY + window.innerHeight > 1500) {
    console.log(1)
    return 1
  }

}

export { useWindowDimensions }
export { checkScrollHeight }