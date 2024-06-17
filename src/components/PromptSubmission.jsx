import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from '@/components/ui/form';
import axios from 'axios';

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
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="promptInput">
        <FormLabel>Enter your prompt</FormLabel>
        <FormControl
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
        />
      </FormGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PromptSubmission;