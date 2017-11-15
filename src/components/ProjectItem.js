import React from 'react';

import ProjectIcons from './ProjectIcons';

const ProjectItem = ({ project }) => {
  return (
    <div key={project.title} className="projectItem">
      <div className="projectTitle">
        {project.title}
        <div>
          <ProjectIcons languages={project.languages} />
        </div>
      </div>
      <div className="projectDescription">{project.description}</div>
      <div className="projectLinks">
        <div>
          <a href={project.repo} target="_blank">
            {project.repo.length ? 'view the code' : ''}
          </a>

        </div>

        <div>
          <a href={project.hosting} target="_blank">
            {
              project.hosting.includes('github') || project.hosting.includes('heroku')
                ? 'view the live demo'
                : null
            }
            {
              project.hosting.includes('codeacademy') || project.hosting.includes('udemy')
                ? 'see my profile'
                : null
            }
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;