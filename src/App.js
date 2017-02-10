import React, { Component } from 'react';
import Container1 from './container/Container1.js';
import Container2 from './container/Container2.js';
import Container3 from './container/Container3.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container1 />
        <Container2 />
        <Container3 />
      </div>
    );
  }
}

export default App;
