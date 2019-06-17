import React from 'react';
import Router from './Router';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';

function App() {
  return (
    <ErrorBoundry>
      <div className="App">
        <Router />
      </div>
    </ErrorBoundry>
  );
}

export default App;
