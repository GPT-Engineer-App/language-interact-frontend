import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

function HowToUse() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How to Use</CardTitle>
      </CardHeader>
      <CardContent>
        <p>1. Enter your prompt in the input field.</p>
        <p>2. Click the "Submit" button to submit your prompt.</p>
        <p>3. Wait for the response to be displayed below the form.</p>
      </CardContent>
    </Card>
  );
}

export default HowToUse;