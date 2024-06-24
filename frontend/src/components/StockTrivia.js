import React, { useState } from 'react';
import triviaData from './triviaData';
import { Container, Row, Col, Button } from 'react-bootstrap';

const StockTrivia = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setQuestionIndex((prevIndex) => (prevIndex + 1) % triviaData.length);
  };

  return (
    <Container className="trivia-container">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Stock Market Trivia</h2>
          <p>{triviaData[questionIndex].question}</p>
          <Button variant="primary" onClick={handleNextQuestion}>Next Question</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default StockTrivia;