import React from 'react';

const ProjectIcons = ({ languages }) => {
  return (
    languages.map(language => {
      return (
        <img
          className="ProjectIcon"
          key={language}
          alt={language}
          src={language}
        />
      )
    })
  );
}

export default ProjectIcons;
