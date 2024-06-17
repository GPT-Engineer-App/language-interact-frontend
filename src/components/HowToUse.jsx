import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HowToUse = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How to Use the Application</CardTitle>
      </CardHeader>
      <CardContent>
        <p>1. Enter your prompt in the text box on the home page.</p>
        <p>2. Click the "Submit" button to send your prompt.</p>
        <p>3. Wait for the response to be displayed below the text box.</p>
        <p>4. Check the console for any errors or additional information.</p>
      </CardContent>
    </Card>
  );
};

export default HowToUse;