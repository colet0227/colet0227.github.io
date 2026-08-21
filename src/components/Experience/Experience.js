import React from 'react'
import './Experience.css'
import { experience } from '../../portfolio'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__container'>
        {experience.map((exp) => (
          <article key={`${exp.name}-${exp.position}`} className='experience__item'>
            <header className='experience__header'>
              <div>
                <h3 className='experience__position'>{exp.position}</h3>
                <p className='experience__company'>{exp.name}</p>
              </div>
              <p className='experience__date'>{exp.description}</p>
            </header>
            <div className='experience__story'>
              {exp.story.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
