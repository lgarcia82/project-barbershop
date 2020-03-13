import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import BarberPage from './components/BarberPage'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' exact component={LandingPage} />
        <Route path='/barber' component={BarberPage} />
      </Router>
    
    </div>
  );
}

export default App;
