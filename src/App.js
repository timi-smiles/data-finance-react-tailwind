import React from 'react'
import Analytics from './components/Analytics';
import Card from './components/Card';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Card></Card>
      <Footer></Footer>

    </div>
  );
}

export default App;
