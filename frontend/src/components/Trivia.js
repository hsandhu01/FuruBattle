import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Trivia = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trivia/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching trivia questions:', error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your score: {score}/{questions.length}</h2>
        </div>
      ) : (
        questions.length > 0 && (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)}>
                {option}
              </button>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Trivia;