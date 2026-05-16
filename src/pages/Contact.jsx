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
      <p className="page-subtitle">
        Have a project in mind or want to connect? Send a message — I&apos;ll
        get back to you soon.
      </p>

      <div className="card-grid" style={{ marginBottom: '2.5rem' }}>
        <article className="card">
          <h3>Email</h3>
          <p>
            <a href="mailto:you@example.com" style={{ color: 'var(--accent)' }}>
              you@example.com
            </a>
          </p>
        </article>
        <article className="card">
          <h3>Links</h3>
          <p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              GitHub
            </a>
            {' · '}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent)' }}
            >
              LinkedIn
            </a>
          </p>
        </article>
      </div>

      <form onSubmit={handleSubmit} style={{ maxWidth: '28rem' }}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell me about your project..."
          />
        </div>
        <button type="submit" className="btn">
          Send message
        </button>
        {submitted && (
          <p className="form-success" role="status">
            Thanks! Your message was recorded locally. Connect the form to your
            backend or a service like Formspree to receive emails.
          </p>
        )}
      </form>
    </section>
  )
}
