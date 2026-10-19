import { useState } from 'react'
import { Mail } from 'lucide-react'
import { PROFILE } from '../data'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!EMAIL_RE.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && <p className="err" id={`${id}-err`}>{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('')
      return
    }
    // No backend yet: open the visitor's email app with the message filled in.
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`
    window.location.href =
      `mailto:${PROFILE.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    setStatus('Your email app should open with the message ready. Nothing is sent until you press send there.')
  }

  const props = (id) => ({
    id, name: id, value: values[id], onChange,
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': errors[id] ? `${id}-err` : undefined,
  })

  return (
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title">Contact</h2>
        <p className="lead">Have a project or an opportunity in mind? Send me a message.</p>
        <div className="contact-grid">
          <ul className="info">
            <li><Mail size={16} aria-hidden="true" /> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
            <li>Phone: <a href={`tel:${PROFILE.phoneHref}`}>{PROFILE.phone}</a></li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                <path d="M12 .297a12 12 0 0 0-3.79 23.39c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.221 0 4.609-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297" />
              </svg>{' '}
              {PROFILE.github
                ? <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                : <span className="note">link pending</span>}
            </li>
            <li>
              LinkedIn:{' '}
              {PROFILE.linkedin
                ? <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">{PROFILE.linkedin}</a>
                : <span className="note">link pending</span>}
            </li>
          </ul>

          <form onSubmit={onSubmit} noValidate>
            <Field id="name" label="Name" error={errors.name}>
              <input type="text" autoComplete="name" {...props('name')} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input type="email" autoComplete="email" {...props('email')} />
            </Field>
            <Field id="subject" label="Subject" error={errors.subject}>
              <input type="text" {...props('subject')} />
            </Field>
            <Field id="message" label="Message" error={errors.message}>
              <textarea rows="5" {...props('message')} />
            </Field>
            <div><button type="submit" className="btn primary">Send message</button></div>
            <p className="note" role="status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
