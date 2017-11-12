import React from 'react';
import projects from '../data/projects';
import '../style/ProjectList.css';

import ProjectItem from './ProjectItem';

const ProjectList = () => {
  return (
      <div className="ProjectList">
        {
          projects.selected.map(project => {
            return <ProjectItem project={project} key={project.title} />
          })
        }
        <a
          className="seeMoreProjects"
        >
          see more projects
        </a>
      </div>
  );
}

export default ProjectList;