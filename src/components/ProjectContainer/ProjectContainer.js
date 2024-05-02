import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useState } from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  // Determine if the project is 'PlateMate'
  const isMobileApp = project.name === 'PlateMate';

  return (
    <div className='project'>
      <div className='project__description'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </div>
      <div className={`project__demo ${isMobileApp ? 'mobile-app' : ''}`}>
        {project.images && project.images.length > 0 && (
          <>
            <img src={project.images[currentImage]} alt='Demo' />
            <div className='project__dots'>
              {project.images.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
