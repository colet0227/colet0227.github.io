import React from 'react';
import uniqid from 'uniqid';
import { experience } from '../../portfolio';
import './Experience.css';

const Experience = () => {
  if (!experience.length) return null;

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__list'>
        {experience.map((exp) => (
          <div key={uniqid()} className='experience__item'>
            <h3 className='experience__name'>{exp.name}</h3>
            <div className='experience__header'>
              <span className='experience__date'>{exp.description}</span>
              <span className='experience__position'>{exp.position}</span>
            </div>
            <ul className='experience__bullets'>
              {exp.bullets.map((bullet) => (
                <li key={uniqid()} className='experience__bullet'>
                  {bullet}
                </li>
              ))}
            </ul>
            {exp.stack && (
              <ul className='experience__stack'>
                {exp.stack.map((item) => (
                  <li key={uniqid()} className='experience__stack-item'>
                    {item}
                  </li>
                ))}
              </ul>
            )}
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
        ))}
      </div>
    </section>
  );
};

export default Experience;
