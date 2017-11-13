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
            {project.repo.length ? 'the code on GitHub' : null}
          </a>
        </div>
        <div>
          <a href={project.hosting} target="_blank">
            {project.hosting.includes('github') ? 'hosted on GitHub' : null}
            {project.hosting.includes('heroku') ? 'hosted on Heroku' : null}
            {project.hosting.includes('codeacademy') ? 'see my CodeAcademy profile' : null}
            {project.hosting.includes('udemy') ? 'see my Udemy profile' : null}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;