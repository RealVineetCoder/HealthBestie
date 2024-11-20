// pages/index.js
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://backend-health-bestie.vercel.app/api/quiz/depression'; // Replace with actual API URL

const Home = () => {
  const [quizData, setQuizData] = useState([]);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);

  // Fetch quiz data from API
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(API_URL);
        setQuizData(response.data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    fetchQuizData();
  }, []);

  // Handle user option selection
  const handleOptionChange = (questionId, score) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionId]: score,
    }));
  };

  // Calculate score on form submission
  const calculateScore = (e) => {
    e.preventDefault();
    const totalScore = Object.values(responses).reduce((sum, score) => sum + score, 0);
    setScore(totalScore);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Quiz</h1>

        {quizData.length > 0 ? (
          <form onSubmit={calculateScore}>
            {quizData.map((question) => (
              <div key={question._id} className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{question.question}</h2>
                <div className="space-y-4">
                  {question.options.map((option) => (
                    <label key={option._id} className="block text-gray-700">
                      <input
                        type="radio"
                        name={question._id}
                        value={option.score}
                        onChange={() => handleOptionChange(question._id, option.score)}
                        className="mr-2"
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <p className="text-center text-gray-600">Loading quiz...</p>
        )}

        {score > 0 && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Your Score: {score}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
