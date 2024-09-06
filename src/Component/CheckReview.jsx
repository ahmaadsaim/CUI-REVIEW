import React from 'react';
import { useNavigate } from 'react-router-dom';

const checkReviews = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/'); 
      };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">THANKS FOR YOUR PATIENCE</h1>
        <p className="mt-4 text-lg">Reviews are been updating soon.</p>
        <p className="text-lg">We were add it in few moments. <span className="underline" onClick={handleChange}>Home</span></p>
      </div>
    </div>
  );
};

export default checkReviews;
