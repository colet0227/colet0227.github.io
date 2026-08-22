import React from 'react'
import './Experience.css'
import { experience } from '../../portfolio'
import capitalOneLogo from '../../contexts/cap1.png'
import commitTheChangeLogo from '../../contexts/committhechange.jpeg'
import afterFleaLogo from '../../contexts/afterflea.png'
import uciLogo from '../../contexts/uci.jpeg'

const companyLogos = {
  'Capital One': capitalOneLogo,
  'Commit the Change': commitTheChangeLogo,
  AfterFlea: afterFleaLogo,
  'UC Irvine': uciLogo,
}

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__container'>
        {experience.map((exp) => (
          <article key={`${exp.name}-${exp.position}`} className='experience__item'>
            <header className='experience__header'>
              <div className='experience__identity'>
                <div className='experience__identity-copy'>
                  <h3 className='experience__position'>{exp.position}</h3>
                  <p className='experience__company'>{exp.name}</p>
                </div>
                <img
                  className='experience__logo'
                  src={companyLogos[exp.name]}
                  alt=''
                  aria-hidden='true'
                />
              </div>
              <p className='experience__date'>{exp.description}</p>
            </header>
            {exp.story && (
              <div className='experience__story'>
                {exp.story.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
