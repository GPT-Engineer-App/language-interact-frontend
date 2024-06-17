import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
      <Form.Group controlId="promptInput">
        <Form.Label>Enter your prompt</Form.Label>
        <Form.Control
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default PromptSubmission;