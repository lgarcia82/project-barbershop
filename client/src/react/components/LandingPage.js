import React from 'react';

import Header from './landing-page/Header'
import BarberList from './landing-page/BarberList'
import Footer from './landing-page/Footer'

function LandingPage() {
  return (
    <div>
        <Header />
        <BarberList />
        <Footer />
    </div>
  );
}

export default LandingPage;