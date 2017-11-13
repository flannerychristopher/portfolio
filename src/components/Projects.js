import React, { Component } from 'react';
import '../style/Projects.css';
import PROJECTS from '../data/projects';

import ProjectItem from './ProjectItem';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: PROJECTS.Selected
    }
  }

  componentWillMount() {
    Object.keys(PROJECTS).forEach(language => {
      this.setState({ [language]: PROJECTS[language] });
    })
  }

  onNavigationClick(language) {
    this.setState({ current: PROJECTS[language] });
  }

  navList() {
    return (
      Object.keys(PROJECTS).map(language => {
        return (
          <div
            className={this.state.current === PROJECTS[language] ? 'activeNavItem' : ''}
            key={language}
            onClick={e => this.onNavigationClick(language)}
          >
            {language}
          </div>
        );
      })
    )
  }

  projectList() {
    return (
      this.state.current.map(project => {
        return <ProjectItem project={project} key={project.title} />
      })
    );
  }

  render() {
    return (
      <div className="Projects" >
        <div className="projectNav">
          {this.navList()}
        </div>
        <div className="projectList">
          {this.projectList()}
        </div>
      </div>
    );
  }
}
