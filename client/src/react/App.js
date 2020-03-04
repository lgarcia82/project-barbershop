import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import LandingPage from './components/LandingPage'

function App() {
  return (
    <div>
      <Router>
        <LandingPage />
      </Router>
    
    </div>
  );
}

export default App;
