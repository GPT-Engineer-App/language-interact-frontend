import React, { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PromptSubmission;