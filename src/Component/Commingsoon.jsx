import React from 'react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/'); 
      };
    
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">COMING SOON!</h1>
        <p className="text-lg font-thin">Go to the home page <span className="underline" onClick={handleChange}>Home</span></p>
      </div>
    </div>
  );
};

export default ComingSoon;
