import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PromptSubmission />
      </div>
    </Provider>
  );
}

export default App;