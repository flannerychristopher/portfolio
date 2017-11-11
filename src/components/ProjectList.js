import React from 'react';
import projects from '../data/projects';
import { GITHUB } from '../constants/constants';
import '../style/ProjectList.css';

const ProjectList = () => {
  return (
    <div className="ProjectList">
      {
        projects.map(project => {
          return (
            <div key={project.title} className="projectItem">
              <div className="projectTitle">{project.title}</div>
              <div className="projectDescription">{project.description}</div>
              <div className="projectLinks">
                <div>
                  <a href={project.repo} target="_blank">the code on GitHub</a>
                </div>
                <div>
                  <a href={project.hosting.url} target="_blank">
                    hosted on {project.hosting.host === GITHUB ? 'GitHub' : 'Heroku'}
                  </a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default ProjectList;