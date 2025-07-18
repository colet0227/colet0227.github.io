import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div className='contact-container'>
        <a href={`mailto:${contact.email}`} className='contact-button'>
          <span className='contact-text'>Email Me!</span>
          <span className='contact-icon'>✉️</span>
        </a>
      </div>
    </section>
  )
}

export default Contact