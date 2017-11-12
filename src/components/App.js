import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../style/App.css';

import Links from './Links';
import Music from './Music';
import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Links />
            <div className="navigation">
              <Link to="/">Development Projects</Link>
            </div>
            <div className="navigation">
              <Link to="/music">Music Recordings</Link>
            </div>
          </header>
          <Route exact path="/" component={ProjectList} />
          <Route path="/music" component={Music} />
        </div>
      </Router>
    );
  }
}

export default App;
