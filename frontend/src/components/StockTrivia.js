import React, { useState } from 'react';
import triviaData from './triviaData';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { toast } from 'react-toastify';

const StockTrivia = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = triviaData[questionIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
      toast.success('Correct!');
    } else {
      toast.error(`Wrong! The correct answer is ${currentQuestion.answer}`);
    }
    setSelectedOption(null);
    setShowAnswer(false);
    setQuestionIndex((prevIndex) => (prevIndex + 1) % triviaData.length);
  };

  return (
    <Container className="trivia-container">
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
              <Button variant="success" onClick={handleNextQuestion} className="mt-3">
                Next Question
              </Button>
            </Card.Body>
          </Card>
          <h5>Score: {score}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default StockTrivia;