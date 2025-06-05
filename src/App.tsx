import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solution from './components/Solution';
import Plan from './components/Plan';
import Author from './components/Author';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Solution />
      <Plan />
      <Author />
      <Testimonials />
      <CallToAction />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;