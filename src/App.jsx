import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import HowToUse from './components/HowToUse';
import { Toaster } from '@/components/ui/toaster';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Application</h1>
        <PromptSubmission />
      <HowToUse />
        <Toaster />
      </div>
    </Provider>
  );
}

export default App;