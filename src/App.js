import React from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App(props) {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
