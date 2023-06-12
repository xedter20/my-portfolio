import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import { About, Footer, Header } from './container/index';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
