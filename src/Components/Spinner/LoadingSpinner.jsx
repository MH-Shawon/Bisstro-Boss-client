
import { useState } from "react";


const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds of loading
  };
  return (
    <div>
      <button onClick={handleClick}>Start Loading</button>
      {isLoading && (
        <div className="loading-spinner flex justify-center items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-spin"></div>
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-spin delay-500"></div>
        </div>
      )}
    </div>
  );
};
export default LoadingSpinner;

