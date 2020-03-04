import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/landing-page/Header'
import BarberList from './components/landing-page/BarberList'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <BarberList />
      </Router>
    
    </div>
  );
}

export default App;
