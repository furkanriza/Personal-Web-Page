import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Footer2 from './components/footer/Footer2';


function App() {
  return (
    <div id="container">
      <Navbar />
      <Home />
      <About />
      <div id='contactdiv'>
        <Contact />
      </div>

      <div id="footerdiv">
        <Footer />
        <img id='reactimg' src={logo} className="App-logo" alt="logo" />
        <Footer2 />
      </div>
     
    </div>
  );
}

export default App;