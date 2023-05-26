import { useContext, useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, experience } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const smoothScrollTo = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleNavList();
  };

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={(e) => smoothScrollTo('projects', e)}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={(e) => smoothScrollTo('skills', e)}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}

        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={(e) => smoothScrollTo('experience', e)}
              className='link link--nav'
            >
              Experience
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={(e) => smoothScrollTo('contact', e)}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </nav>
  )
}

export default Navbar
