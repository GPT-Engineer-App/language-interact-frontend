import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import { Container, Row, Col } from '@/components/ui/grid';
import { Heading, Text } from '@/components/ui/typography';
import HowToUse from './components/HowToUse';
import RealTimeUpdates from './components/RealTimeUpdates';

function App() {
  return (
    <Provider store={store}>
      <Container className="App">
        <Row>
          <Col>
            <Heading>Welcome to the GPT Engineer Application</Heading>
            <Text>Submit your prompts and get real-time updates on the results.</Text>
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