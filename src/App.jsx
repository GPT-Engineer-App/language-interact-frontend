import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';

import { Heading, Text } from '@/components/ui/typography';
import HowToUse from './components/HowToUse';
import RealTimeUpdates from './components/RealTimeUpdates';

function App() {
  return (
    <Provider store={store}>
      <div className="App max-w-7xl mx-auto p-8">
        <div className="mb-8">
            <Heading>Welcome to the GPT Engineer Application</Heading>
            <Text>Submit your prompts and get real-time updates on the results.</Text>
          </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8">
            <PromptSubmission />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8">
            <HowToUse />
          </div>
        </div>
        <div className="w-full px-4">
            <RealTimeUpdates />
          </div>
      </div>
    </Provider>
  );
}

export default App;