import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import LandingPage from './components/LandingPage'
import BarberPage from './components/BarberPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={LandingPage} />
          <Route path='/barber' component={BarberPage} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
