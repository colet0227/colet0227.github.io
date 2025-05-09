import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState, useEffect, useRef, useCallback } from 'react';
import './ProjectContainer.css';
import React from 'react';

const ProjectContainer = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const projectRef = useRef(null);
  const demoRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  // Update the background when the current image changes
  useEffect(() => {
    if (demoRef.current && project.images && project.images.length > 0) {
      const demoEl = demoRef.current;
      demoEl.style.setProperty('--current-image', `url(${project.images[currentImage]})`);
    }
  }, [currentImage, project.images]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowRight') {
      nextImage();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
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

  return (
    <div
      className={`project ${project.name === 'Connekt' ? 'project--connekt' : ''}`}
      tabIndex="0"
      ref={projectRef}
    >
      {project.images && project.images.length > 0 && (
        <div className="project__demo" ref={demoRef} style={{ 
          '--current-image': `url(${project.images[currentImage]})` 
        }}>
          <div className="project__demo-inner">
            <img src={project.images[currentImage]} alt={`${project.name} demo`} />
            <div className="image-overlay"></div>
            {project.images.length > 1 && (
              <div className="project__navigation">
                <div className="nav-arrow" onClick={prevImage}>
                  <ArrowBackIosIcon style={{ fontSize: '0.9rem' }} />
                </div>
                <div className="image-counter">
                  {currentImage + 1}/{project.images.length}
                </div>
                <div className="nav-arrow" onClick={nextImage}>
                  <ArrowForwardIosIcon style={{ fontSize: '0.9rem' }} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="project__content">
        <div className="project__header">
          <h3 className="project__title">{project.name}</h3>
          
          <div className="project__links">
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                aria-label="source code"
                className="link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {project.livePreview && (
              <a
                href={project.livePreview}
                aria-label="live preview"
                className="link--icon"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LaunchIcon />
              </a>
            )}
          </div>
        </div>

        <div className="project__description">
          <p>{project.description}</p>
        </div>

        {project.bullets && (
          <ul className="project__bullets">
            {project.bullets.map((bullet) => (
              <li key={uniqid()} className="project__bullet">
                <ArrowForwardIcon fontSize="small" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {project.stack && (
          <div className="project__stack">
            {project.stack.map((item) => (
              <span key={uniqid()} className="project__stack-item">{item}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectContainer;
