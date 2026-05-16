import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="page">
      <h1 className="page-title">Contact</h1>
      <div className="card-grid" style={{ marginBottom: '2.5rem' }}>
        <article className="card">
          <h3>Email</h3>
          <p>
            <a href="mailto:you@example.com" style={{ color: 'var(--accent)' }}>
              shibly.dhk@gmail.com
            </a>
          </p>
        </article>
        <article className="card">
          <h3>Links</h3>
          <p>
            <a
              href="https://github.com/shibly-"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://www.linkedin.com/in/shibly/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              LinkedIn
            </a>
          </p>
        </article>
      </div>

    </section>
  )
}
