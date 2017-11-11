import React from 'react';
import projects from '../data/projects';
import { GITHUB } from '../constants/constants';

const ProjectList = () => {
  console.log(projects);
  return (
    <div>
      {
        projects.map(project => {
          return (
            <div key={project.title} className="projectContainer">
              <div className="projectTitle">{project.title}</div>
              <div className="projectDescription">{project.description}</div>
              <div className="projectLinks">
                <a href={project.repo} target="_blank">the code on GitHub</a>
                <a href={project.hosting.url} target="_blank">hosted on { project.hosting.host === GITHUB ? 'GitHub' : 'Heroku'}</a>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ProjectList;