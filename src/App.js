import React from 'react';
import QuoteComponent from './components/QuoteComponent'

import './App.css';

function App() {
  return (
    <div id="quote-box">
      <QuoteComponent />
      <button id="tweet-quote">Twitter</button>
      <button id="new-quote">New Quote</button>
    </div>
  );
}

export default App;
