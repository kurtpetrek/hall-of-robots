import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollMemory from 'react-router-scroll-memory';

import Layout from './components/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ScrollMemory />
          <Route path="/" exact component={Layout} />
          <Route path="/:id" component={Layout} />
        </div>
      </Router>
    );
  }
}

export default App;
