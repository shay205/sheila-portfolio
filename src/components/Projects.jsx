import { ExternalLink } from 'lucide-react'
import { PROJECTS } from '../data'

function LinkButton({ href, primary, children }) {
  const cls = `btn${primary ? ' primary' : ''}`
  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children} <ExternalLink size={16} aria-hidden="true" />
      </a>
    )
  }
  return (
    <button type="button" className={cls} disabled title="Link not added yet">
      {children} (link pending)
    </button>
  )
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <p className="lead">
          A selection of practical projects built for the web.
        </p>
        <ul className="grid projects">
          {PROJECTS.map((p) => (
            <li key={p.name} className="card project">
              <div className="shot">
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul className="chips" aria-label="Technologies used">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              {p.github && (
                <div className="actions">
                  <LinkButton href={p.github}>GitHub</LinkButton>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
