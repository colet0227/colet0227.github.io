import React from 'react'
import './Experience.css'
import { CalendarToday } from '@mui/icons-material'
import { experience } from '../../portfolio'

const Experience = () => {
  // Try multiple approaches for logo imports
  const getLogoPath = (filename) => {
    try {
      return require(`../../contexts/${filename}`);
    } catch (error) {
      console.log(`Could not load logo with require: ${filename}`);
      // Try public folder as fallback
      return `/contexts/${filename}`;
    }
  };

  // Map portfolio experience data to component format
  const experiences = experience.map((exp, index) => {
    let logoFileName = '';
    if (exp.name === 'Capital One') logoFileName = 'cap1.png';
    else if (exp.name === 'Commit the Change') logoFileName = 'committhechange.jpeg';
    else if (exp.name === 'AfterFlea') logoFileName = 'afterflea.png';
    else if (exp.name === 'UC Irvine') logoFileName = 'uci.jpeg';

    return {
      id: index + 1,
      position: exp.position,
      company: exp.name,
      date: exp.description,
      story: exp.story,
      logo: logoFileName ? getLogoPath(logoFileName) : null
    };
  });

  return (
    <section className='section experience' id='experience'>
      <h2 className='section__title'>Experience</h2>
      <div className='experience__container'>
        {experiences.map((exp) => (
          <div key={exp.id} className='experience__item'>
            <div className='experience__content'>
              <div className='experience__header'>
                <h3 className='experience__position'>{exp.position}</h3>
                <h4 className='experience__company'>{exp.company}</h4>
                <div className='experience__date'>
                  <CalendarToday style={{ fontSize: '1rem' }} />
                  {exp.date}
                </div>
              </div>
              <div className='experience__story'>
                <p>{exp.story}</p>
              </div>
            </div>
            
            <div className='experience__icon'>
              {exp.logo ? (
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.log(`Failed to load logo for ${exp.company}`);
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--clr-primary)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold'
                }}>
                  {exp.company.charAt(0)}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience