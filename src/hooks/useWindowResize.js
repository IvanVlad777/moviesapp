import { useEffect, useState } from 'react';

const checkSize = () => {
  let newSize = 2;
  if (window.innerWidth > 400) newSize = 3;
  if (window.innerWidth > 650) newSize = 4;
  if (window.innerWidth > 900) newSize = 5;
  if (window.innerWidth > 1100) newSize = 6;
  if (window.innerWidth > 1300) newSize = 7;
  if (window.innerWidth > 1500) newSize = 8;
  return newSize;
};

const useWindowSize = () => {
  const [size, setSize] = useState(checkSize());
  useEffect(() => {
    const handleResize = () => {
      setSize(checkSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

export default useWindowSize;
