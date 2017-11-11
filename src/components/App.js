import React, { Component } from 'react';
import '../style/App.css';
import logo from '../images/logo.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import wordpress from '../images/wordpress.png';

import ProjectList from './ProjectList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="externalLinks">
            <a href="https://github.com/flanthedev" target="_blank">
              <img src={github} />
            </a>
            <a href="https://www.linkedin.com/in/chris-flan" target="_blank">
              <img src={linkedin} />
            </a>
            <a href="https://flanthedev.wordpress.com/portfolio/" target="_blank">
              <img src={wordpress} />
            </a>
          </div>              
        </header>
          <ProjectList />
      </div>
        );
  }
}

export default App;
