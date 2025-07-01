import { useContext, useState } from 'react'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact, experience } from '../../portfolio'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import './Navbar.css'

const Navbar = () => {
  const { themeName } = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const smoothScrollTo = (id, event) => {
    event.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const navbarHeight = 120 // Account for navbar height and spacing
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setShowNavList(false) // Close mobile menu
  }

  return (
    <nav className='navbar'>
      <div className='navbar__content'>
        <a href="/" className='navbar__logo'>Portfolio</a>

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