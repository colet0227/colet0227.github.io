import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect, useRef, useCallback } from 'react';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const projectRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentImage(index);
  };

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowRight') {
      setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentImage((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    }
  }, [project.images.length]);

  useEffect(() => {
    const projectElement = projectRef.current;
    if (projectElement) {
      projectElement.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (projectElement) {
        projectElement.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [handleKeyDown]);

  const isMobileApp = project.name === 'PlateMate';

  return (
    <div
      className='project'
      tabIndex="0"
      ref={projectRef}
    >
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

      <div className='project__description'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        {/* Display bullet points with ArrowForward icon, hidden on mobile */}
        {project.bullets && (
          <ul className='project__bullets'>
            {project.bullets.map((bullet) => (
              <li key={uniqid()} className='project__bullet'>
                <ArrowForwardIcon fontSize='small' />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

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
    </div>
  );
};

export default ProjectContainer;
