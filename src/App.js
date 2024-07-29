

import React from 'react';
import About from '../src/About';
import Contact from '../src/Contact';
import Footer from '../src/Footer';
import Home from '../src/Home';
import Navbar from '../src/Navbar';
import Services from '../src/Services';
import Testimonials from '../src/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
