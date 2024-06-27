import React, { useState, useEffect } from 'react';
import { triviaData } from './triviaData';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';
import axios from 'axios';

const StockTrivia = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Shuffle and select 10 random questions
    const shuffledQuestions = triviaData.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffledQuestions);
  }, []);

  const currentQuestion = questions[questionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      toast.success('Correct!');
    } else {
      toast.error(`Wrong! The correct answer is ${currentQuestion.answer}`);
    }
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setSelectedOption(null);
  };

  useEffect(() => {
    if (questionIndex === 10) {
      const saveScore = async () => {
        try {
          await axios.post('http://localhost:5000/api/leaderboard', { score }, {
            headers: {
              'x-auth-token': localStorage.getItem('token')
            }
          });
          toast.success('Score saved to leaderboard!');
        } catch (error) {
          toast.error('Error saving score to leaderboard');
        }
      };
      saveScore();
    }
  }, [questionIndex, score]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  if (questionIndex === 10) {
    return (
      <Container className="trivia-container">
        <h2>Trivia Completed!</h2>
        <h3>Your Score: {score}</h3>
      </Container>
    );
  }

  return (
    <Container className="trivia-container">
      {showConfetti && <Confetti />}
      <Row className="justify-content-md-center">
        <Col md="8">
          <Card className="my-4">
            <Card.Body>
              <Card.Title>{currentQuestion.question}</Card.Title>
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? 'primary' : 'outline-primary'}
                  className="d-block my-2"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </Button>
              ))}
              <Button variant="success" onClick={handleNextQuestion} className="mt-3" disabled={!selectedOption}>
                Next Question
              </Button>
            </Card.Body>
          </Card>
          <h5>Score: {score}</h5>
          <h5>Question {questionIndex + 1} of 10</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default StockTrivia;
