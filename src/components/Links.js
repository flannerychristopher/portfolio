import React from 'react';
import links from '../data/links';

const Links = () => {
  return (
    <div className="externalLinks">
      {
        links.map(link => {
          return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.img} alt={link.title} />
            </a>
          )
        })
      }
    </div>
  );
}

export default Links;