import React, { useState, useEffect } from 'react';
import { FaRocket } from 'react-icons/fa'; // Importing rocket icon

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100)); // Increment progress
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-12 bg-gray-300 rounded-full shadow-lg">
      {/* Progress bar background */}
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-orange-600 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Rocket icon */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2"
        style={{
          left: `calc(${progress}% - 20px)`, // Adjust rocket's position based on progress
          transition: 'left 0.2s ease-out',
        }}
      >
        <FaRocket size={35} className="text-white drop-shadow-xl" />
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"
          style={{
            animation: progress === 100 ? 'none' : 'rocketTrail 0.4s ease-out infinite',
          }}
        ></div>
      </div>

      {/* Progress bar label */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 text-white font-semibold"
        style={{
          fontSize: '1rem',
          zIndex: 1,
        }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;