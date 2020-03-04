import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/landing-page/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    
    </div>
  );
}

export default App;
