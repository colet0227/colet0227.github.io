import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <article className={`project ${project.name === 'Connekt' ? 'project--connekt' : ''}`}>
    <div className='project__content'>
      <div className='project__header'>
        <h3 className='project__title'>{project.name}</h3>
        <div className='project__links'>
          {project.sourceCode && (
            <a href={project.sourceCode} aria-label={`${project.name} source code`} className='link--icon' target='_blank' rel='noopener noreferrer'>
              <GitHubIcon />
            </a>
          )}
          {project.livePreview && (
            <a href={project.livePreview} aria-label={`${project.name} live preview`} className='link--icon' target='_blank' rel='noopener noreferrer'>
              <LaunchIcon />
            </a>
          )}
        </div>
      </div>

      <div className='project__description'>
        <p>{project.description}</p>
      </div>

      {project.projectDescription && (
        <div className='project__description-detail'>
          <p>{project.projectDescription}</p>
        </div>
      )}

      {project.stack?.length > 0 && (
        <div className='project__stack'>
          {project.stack.map((item) => (
            <span key={uniqid()} className='project__stack-item'>{item}</span>
          ))}
        </div>
      )}
    </div>
  </article>
)

export default ProjectContainer
