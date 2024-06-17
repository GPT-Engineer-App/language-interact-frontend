import React from 'react';
import { Card } from 'react-bootstrap';

const HowToUse = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>How to Use the Application</Card.Title>
        <Card.Text>
          <ol>
            <li>Enter your prompt in the input field.</li>
            <li>Click the "Submit" button to send your prompt.</li>
            <li>Wait for the real-time updates to see the results.</li>
          </ol>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HowToUse;