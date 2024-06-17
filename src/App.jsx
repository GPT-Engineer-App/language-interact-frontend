import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import HowToUse from './components/HowToUse';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HowToUse />
        <PromptSubmission />
      </div>
    </Provider>
  );
}

export default App;