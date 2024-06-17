import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PromptSubmission from './components/PromptSubmission';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import './index.css';

import HowToUse from './components/HowToUse';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <nav className="p-4 bg-gray-800 text-white">
            <Link to="/" className="mr-4">
              <Button variant="link">Home</Button>
            </Link>
            <Link to="/how-to-use">
              <Button variant="link">How to Use</Button>
            </Link>
          </nav>
          <main className="p-4">
            <Routes>
              <Route path="/" element={<PromptSubmission />} />
              <Route path="/how-to-use" element={<HowToUse />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;