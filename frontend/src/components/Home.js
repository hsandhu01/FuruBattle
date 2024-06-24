import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="text-center">
          <h2>Welcome to FuruBattle</h2>
          <p>Compete in stock investing competitions and test your knowledge with stock market trivia!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;