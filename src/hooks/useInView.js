import { useState, useEffect } from 'react';

export const useInView = (ref) => {

  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {threshold: 0.7});

    observer.observe(ref.current);
    
    // console.log(observer.thresholds);
    // console.log(isIntersecting);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};