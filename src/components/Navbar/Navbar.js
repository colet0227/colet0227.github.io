import { useState } from 'react'
import { projects, skills, contact, experience } from '../../portfolio'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const smoothScrollTo = (id, event) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setShowNavList(false)
  }

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <a href="/" className='navbar__logo'>
          <span className='navbar__logo-text'>✦</span>
        </a>

        <button
          type='button'
          onClick={toggleNavList}
          className='btn btn--icon navbar__hamburger'
          aria-label='toggle navigation'
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>

        <ul className={`navbar__list ${showNavList ? 'navbar__list--active' : ''}`}>
          {projects.length ? (
            <li className='navbar__list-item'>
              <a
                href='#projects'
                onClick={(e) => smoothScrollTo('projects', e)}
                className='navbar__link'
              >
                Projects
              </a>
            </li>
          ) : null}

          {experience.length ? (
            <li className='navbar__list-item'>
              <a
                href='#experience'
                onClick={(e) => smoothScrollTo('experience', e)}
                className='navbar__link'
              >
                Experience
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li className='navbar__list-item'>
              <a
                href='#skills'
                onClick={(e) => smoothScrollTo('skills', e)}
                className='navbar__link'
              >
                Skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li className='navbar__list-item'>
              <a
                href='#contact'
                onClick={(e) => smoothScrollTo('contact', e)}
                className='navbar__link'
              >
                Contact
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar