import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HowToUse from './components/HowToUse';
import RealTimeUpdates from './components/RealTimeUpdates';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Row>
          <Col>
            <h1>Welcome to the GPT Engineer Application</h1>
            <p>Submit your prompts and get real-time updates on the results.</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <PromptSubmission />
          </Col>
          <Col md={6}>
            <HowToUse />
          </Col>
        </Row>
        <Row>
          <Col>
            <RealTimeUpdates />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;