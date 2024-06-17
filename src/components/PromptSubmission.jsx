import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

function PromptSubmission() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (res.ok) {
        setResponse(data);
        toast({
          title: 'Success',
          description: 'Prompt submitted successfully!',
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError(err.message);
      toast({
        title: 'Error',
        description: err.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
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
    </div>
  );
}

export default PromptSubmission;