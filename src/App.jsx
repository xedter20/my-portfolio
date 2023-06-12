import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import {
  About,
  Footer,
  Header,
  Work,
  Skills,
  Testimonials
} from './container/index';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    );
  }
}

export default App;
