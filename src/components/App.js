import React, { Component } from 'react';
import '../style/App.css';
import logo from '../images/logo.png';


import ExternalLinks from './ExternalLinks';
import ProjectList from './ProjectList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ExternalLinks />
        </header>
        <ProjectList />
      </div>
    );
  }
}

export default App;
