import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <div className='ugly'>
          <span type='button' className='btn btn--outline'>
            Email Me!
          </span>
        </div>  
      </a>
    </section>
  )
}

export default Contact