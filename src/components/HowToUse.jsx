import React from 'react';
import { Card, CardBody, CardTitle, CardText } from '@/components/ui/card';

const HowToUse = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>How to Use the Application</CardTitle>
        <CardText>
          <ol>
            <li>Enter your prompt in the input field.</li>
            <li>Click the "Submit" button to send your prompt.</li>
            <li>Wait for the real-time updates to see the results.</li>
          </ol>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default HowToUse;