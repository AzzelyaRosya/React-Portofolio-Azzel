import React from 'react';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/React-Portofolio-Azzel/" component={Banner} />
          <Route path="/React-Portofolio-Azzel/about" component={About} />
          <Route path="/React-Portofolio-Azzel/project" component={Project} />
          <Route path="/React-Portofolio-Azzel/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
