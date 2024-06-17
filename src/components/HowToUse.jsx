import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HowToUse = () => (
  <Card className="mt-8">
    <CardHeader>
      <CardTitle>How to Use the Application</CardTitle>
    </CardHeader>
    <CardContent>
      <ol className="list-decimal list-inside space-y-2">
        <li>Enter your prompt in the input field.</li>
        <li>Click the "Submit" button to send your prompt.</li>
        <li>Wait for the response to be displayed below the form.</li>
      </ol>
    </CardContent>
  </Card>
);

export default HowToUse;