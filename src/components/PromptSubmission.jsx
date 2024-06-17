import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

function PromptSubmission() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  function useStreamingUpdates(setResponse) {
    useEffect(() => {
      const eventSource = new EventSource('/api/stream-updates');
      eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setResponse(data.response);
      };
      return () => {
        eventSource.close();
      };
    }, [setResponse]);
  }

  useStreamingUpdates(setResponse);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      setError('Error submitting prompt');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit a Prompt</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt"
          />
          <Button type="submit">Submit</Button>
        </form>
        {response && (
          <Alert>
            <AlertTitle>Response</AlertTitle>
            <AlertDescription>{response}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}

export default PromptSubmission;