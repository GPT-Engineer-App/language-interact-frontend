import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function PromptSubmission() {
  const [prompt, setPrompt] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submit', { prompt });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting prompt:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit Your Prompt</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
      <CardFooter>
        <p>Enter your prompt and click submit to get a response.</p>
      </CardFooter>
    </Card>
  );
}

export default PromptSubmission;