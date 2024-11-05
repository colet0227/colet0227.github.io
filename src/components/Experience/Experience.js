import React from 'react'
import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import { Work, CalendarToday, ArrowForward } from '@mui/icons-material'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__timeline'>
        {experience.map((exp, index) => (
          <div key={uniqid()} className={`experience__item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className='experience__content'>
              <div className='experience__icon'>
                <Work />
              </div>
              <h3 className='experience__name'>{exp.name}</h3>
              <p className='experience__position'>{exp.position}</p>
              <div className='experience__date'>
                <CalendarToday fontSize='small' />
                <span>{exp.description}</span>
              </div>
              <ul className='experience__bullets'>
                {exp.bullets.map((bullet) => (
                  <li key={uniqid()} className='experience__bullet'>
                    <ArrowForward fontSize='small' />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              {exp.stack && exp.stack.length > 0 && (
                <div className='experience__stack'>
                  <h4>Technologies:</h4>
                  <ul>
                    {exp.stack.map((item) => (
                      <li key={uniqid()} className='experience__stack-item'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className='experience__links'>
                {exp.sourceCode && (
                  <a
                    href={exp.sourceCode}
                    aria-label='source code'
                    className='link link--icon'
                  >
                    Source Code
                  </a>
                )}
                {exp.livePreview && (
                  <a
                    href={exp.livePreview}
                    aria-label='live preview'
                    className='link link--icon'
                  >
                    Live Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience