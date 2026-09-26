import React from 'react'
import './Experience.css'
import { experience } from '../../portfolio'
import capitalOneLogo from '../../contexts/cap1.png'
import commitTheChangeLogo from '../../contexts/committhechange.jpeg'
import uciLogo from '../../contexts/uci.jpeg'

const companyLogos = {
  'Capital One': capitalOneLogo,
  'Commit the Change': commitTheChangeLogo,
  'UC Irvine': uciLogo,
}

const borderedLogos = new Set(['Commit the Change'])

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__container'>
        {experience.map((exp) => (
          <article key={`${exp.name}-${exp.position}`} className='experience__item'>
            <img
              className={`experience__logo${borderedLogos.has(exp.name) ? ' experience__logo--bordered' : ''}`}
              src={companyLogos[exp.name]}
              alt=''
              aria-hidden='true'
            />
            <header className='experience__header'>
              <div className='experience__identity'>
                <h3 className='experience__position'>{exp.position}</h3>
                {exp.website ? (
                  <a className='experience__company' href={exp.website} target='_blank' rel='noreferrer'>
                    {exp.name}
                  </a>
                ) : (
                  <p className='experience__company'>{exp.name}</p>
                )}
              </div>
              <p className='experience__date'>{exp.description}</p>
            </header>
            {exp.story && (
              <div className='experience__story'>
                {typeof exp.story === 'string'
                  ? exp.story.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : exp.story}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
