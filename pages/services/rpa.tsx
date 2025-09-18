import React, { useState, useEffect, useRef } from "react";
import RPA from "@/services/rpa";
import Loader from "@/components/Loader";

const RPAPage: React.FC = () => {
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
      <RPA />
    </div>
  );
}

export default RPAPage;