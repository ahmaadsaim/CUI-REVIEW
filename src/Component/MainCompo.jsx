import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MainCompo = () => {
  const teachers = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];
  const [selectedTeacher, setSelectedTeacher] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const navigate = useNavigate();

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };


  const handleSubmitButton = () => {
    window.open("https://forms.gle/AeZCczJJJaqsF1g27", "_blank");
    navigate("/submitted");
  };

  const handleCheckReview = () => {
    navigate("/check-reviews")
  };
  
  

  return (
    <>
      <div className='bg-slate-900 min-h-screen'>
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row items-center justify-center py-9 px-5 md:px-0">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-white font-bold text-3xl md:text-4xl mb-4">
              Welcome to CuiReview: <br /> Your Ultimate Teacher <br /> Review Platform!
            </h1>
            <p className="text-white font-thin text-lg md:text-xl">
              Imagine a platform where your voice matters, <br />
              but your identity remains completely anonymous. <br />
              Cui-Review is the ultimate destination for students to explore <br />
              and share authentic reviews of educators <br /> without revealing their identity.
            </p>
          </div>
          <div className="md:w-1/3">
            <img className="h-auto w-full max-w-full" src="/faculty.png" alt="Faculty Illustration" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap px-5 md:px-0">
          <button onClick={handleSubmitButton} className="text-white font-thin text-lg md:text-xl px-3 py-2 bg-blue-950 rounded-md shadow-md">
            Give Reviews
          </button>
          <button onClick={handleCheckReview} className="text-white font-thin text-lg md:text-xl px-3 py-2 bg-blue-950 rounded-md shadow-md">
            Check Reviews
          </button>
        </div>

        {/* Why We Created Section */}
        <div className="flex flex-col items-center mt-12 mb-7 px-5">
          <div className="text-center mb-7">
            <p className="text-xl md:text-3xl font-semibold text-white flex items-center justify-center whitespace-nowrap overflow-hidden">
              Why Did We Create - <span className='bg-white text-black font-bold px-2 py-0'>Cui-Review</span> - ?
            </p>
          </div>
          <div>
            <div className='grid gap-4'>
              <div className='bg-white mx-2 my-2 px-2 py-1 flex items-center gap-3 rounded-md'>
                <img className='h-7 w-7' src="/checked.png" alt="" />
                <p className='font-light text-slate-900'>YOUR ALL TEACHERS AT ONE PLACE</p>
              </div>

              <div className='bg-white mx-2 my-2 px-2 py-1 flex items-center gap-3 rounded-md'>
                <img className='h-7 w-7' src="/checked.png" alt="" />
                <p className='font-light text-slate-900'>GET A NON-BIASED REVIEW</p>
              </div>

              <div className='bg-white mx-2 my-2 px-2 py-1 flex items-center gap-3 rounded-md'>
                <img className='h-7 w-7' src="/checked.png" alt="" />
                <p className='font-light text-slate-900'>GIVE REVIEW WITH HIDDEN IDENTITY</p>
              </div>

              <div className='bg-white mx-2 my-2 px-2 py-1 flex items-center gap-3 rounded-md'>
                <img className='h-7 w-7' src="/checked.png" alt="" />
                <p className='font-light text-slate-900'>GIVE YOUR OWN REVIEW WITH CUI-REVIEW</p>
              </div>
            </div>
          </div>

          <div className='bg-white h-[6px] w-full max-w-lg border-white rounded-full mt-9'></div>
        </div>

        {/* Review Section */}
        <div className='items-center mt-10 px-5'>
          <h2 className='text-white font-semibold text-center text-2xl md:text-3xl'>
            Give Feedback
          </h2>

          <div className="flex flex-col items-center justify-center mt-6">
            <label htmlFor="teacher" className="mb-2 text-lg font-medium text-white">
              Select a Teacher:
            </label>
            <select
              id="teacher"
              value={selectedTeacher}
              onChange={handleTeacherChange}
              className="w-64 p-2 border border-gray-300 rounded-full bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className='text-white font-bold' value="" disabled>Select a Teacher</option>
              {teachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>

            <label htmlFor="review" className="mt-6 text-lg font-medium text-white">
              Write Your Review:
            </label>
            <textarea
              id="review"
              value={review}
              onChange={handleReviewChange}
              className="w-full max-w-lg p-2 mt-2 border text-white border-gray-300 rounded-md bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter your review here"
            ></textarea>

            {/* Star Rating Section */}
            <div className="flex mt-4">
              <div className="flex ml-4">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        className="hidden"
                      />
                      <FaStar
                        className="star cursor-pointer"
                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={30}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>

            <p className="text-white font-semibold mt-2">Your reviews are added with full <span className='font-extrabold'>Privacy</span>.</p>
            <p className='text-white'>
              if teacher is not present. <span onClick={handleSubmitButton} className='font-bold'>CLICK TO ADD</span>
            </p>
            <button
              onClick={handleSubmitButton}
              disabled={!selectedTeacher || !review || !rating}
              className={`mt-4 px-4 py-2 ${(!selectedTeacher || !review || !rating) ? 'bg-gray-500' : 'bg-blue-950'} text-white font-medium rounded-md`}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCompo;