import React, { useState, useEffect, useRef } from 'react';
import App from '@/services/app';
import Loader from '@/components/Loader';

const MobileAppDevelopment = () => {
  const [showLoader, setShowLoader] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClick = () => {
      setShowLoader(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => setShowLoader(false), 4000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div>
      {showLoader && <Loader />}
      <App />
    </div>
  );
};

export default MobileAppDevelopment;