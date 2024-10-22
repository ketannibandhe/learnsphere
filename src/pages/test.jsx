import React, { useState } from 'react';
import axios from 'axios';

const Test = ({ tests }) => {
  const [selectedTest, setSelectedTest] = useState(null); // Stores the selected test
  const [answers, setAnswers] = useState({}); // Stores user's answers for the current test
  const [userEmail, setUserEmail] = useState(''); // Stores the user's email
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle selecting a test
  const handleSelectTest = (index) => {
    setSelectedTest(tests[index]);
    setAnswers({});
    setIsSubmitted(false);
  };

  // Handle user's answer selection
  const handleAnswerChange = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  // Submit the test and send email
  const handleSubmitTest = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tests/submit', {
        testId: selectedTest._id, // Assuming each test has a unique ID
        userAnswers: answers,
        userEmail, // Include the user's email
      });
      setIsSubmitted(true);
      console.log(response.data); // Log or handle the response as needed
    } catch (error) {
      console.error("Error submitting answers:", error);
      alert("Could not submit answers. Please try again.");
    }
  };

  // Calculate the score after the test is submitted
  const calculateScore = () => {
    let score = 0;
    selectedTest.questions.forEach((question, index) => {
      if (answers[index] === parseInt(question.correctAnswer) - 1) {
        score += parseInt(selectedTest.marksPerQuestion);
      }
    });
    return score;
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Take an MCQ Test</h2>

      {/* Email Input */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Your Email:
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter your email"
            required
          />
        </label>
      </div>

      {/* Test Selection */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-700">Available Tests:</h3>
        <ul className="space-y-2">
          {tests.map((test, index) => (
            <li key={index}>
              <button
                onClick={() => handleSelectTest(index)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300"
              >
                {test.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Test Display */}
      {selectedTest && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">{selectedTest.name}</h3>
          <p className="text-gray-700 mb-2">Total Questions: {selectedTest.totalQuestions}</p>
          <p className="text-gray-700 mb-6">Marks Per Question: {selectedTest.marksPerQuestion}</p>

          {/* Display MCQ Questions */}
          <ol className="list-decimal list-inside space-y-4">
            {selectedTest.questions.map((question, qIndex) => (
              <li key={qIndex} className="text-gray-800">
                <p className="font-semibold">{question.questionText}</p>
                <ul className="mt-2 space-y-2">
                  {question.options.map((option, oIndex) => (
                    <li key={oIndex}>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name={`question-${qIndex}`}
                          value={oIndex}
                          checked={answers[qIndex] === oIndex}
                          onChange={() => handleAnswerChange(qIndex, oIndex)}
                          disabled={isSubmitted}
                          className="form-radio text-blue-600"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          {/* Submit Button */}
          {!isSubmitted ? (
            <button
              className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:ring focus:ring-green-300"
              onClick={handleSubmitTest}
            >
              Submit Test
            </button>
          ) : (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-green-700">Test Submitted!</h4>
              <p className="text-gray-700">
                Your Score: {calculateScore()} / {selectedTest.totalQuestions * selectedTest.marksPerQuestion}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;
