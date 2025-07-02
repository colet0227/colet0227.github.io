import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  // console.log(projects); // debug line
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.slice(0, 2).map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
        <div className='projects__third-row'>
          {projects.slice(2, 5).map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
          ))}
        </div>
      </div>
      <div className='project_description'>
        {/* i only want the following p to be center text aligned */}
        <p>
          <a 
            href="https://github.com/colet0227" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            Look for more projects on my Github!
          </a>
        </p>
      </div>
    </section>
  )
}

export default Projects
