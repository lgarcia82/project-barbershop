import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/landing-page/Header'
import BarberList from './components/landing-page/BarberList'
import Footer from './components/landing-page/Footer'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <BarberList />
        <Footer />
      </Router>
    
    </div>
  );
}

export default App;
