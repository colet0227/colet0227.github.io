import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo, name, role, description, resume, social} = about

  return (
    <div className='about center'>
      <div className='about__content'>
        <div>
          {name && (
            <h1>
              <span className="about__text">Hi, I'm</span> <span className='about__name'>{name}</span><span className="about__text">.</span>
            </h1>
          )}

          {role && (
            <h2 className='about__role'>
              {role.includes('Capital One') ? (
                <>
                  {role.split('Capital One')[0]}
                  <span className='about__name'>Capital One</span>
                </>
              ) : (
                role
              )}
            </h2>
          )}
          <div className='description-container'>
            <p className='about__desc'>
              {description && description}
            </p>
            <span className="typing-indicator"></span>
          </div>
        </div>

        {photo && (
          // <img className="about__image" alt="Avatar placeholder" src={photo} />
          <div className='img-wrapper'>
            <img alt="Avatar placeholder" src={photo} />
          </div>
        )}
      </div>

      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon style={{ fontSize: '2rem' }} />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon style={{ fontSize: '2.2rem' }} />
              </a>
            )}
          </>
        )}

        {resume && (
          <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">
            <span className="resume-text">View Resume</span>
            <span className="resume-icon">📄</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
