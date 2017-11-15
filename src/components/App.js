import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import '../style/App.css';
import code from '../images/code.png';
import music from '../images/music.png';
import flan from '../images/flan.png';

import Links from './Links';
import Music from './Music';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <img src={flan} alt='flan' className='flanIcon' />
            <span className='flanText'>flan the dev</span>
            <Links />
            <div className="navigation">
              <Link to="/">
                <span>development</span>
                <img src={code} alt='code icon' />
              </Link>
              <Link to="/music">
                <span>music</span>
                <img src={music} alt='musical note icon' />
              </Link>
            </div>
          </header>

          <Route exact path="/" component={Projects} />
          <Route path="/music" component={Music} />
          {/* <a className="backToTop">back to top</a> */}
        </div>
      </Router>
    );
  }
}

export default App;
