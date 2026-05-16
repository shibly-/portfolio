import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <section className="page home-page">
      <p className="home-greeting">Hello, I&apos;m</p>
      <h1 className="home-name">Your Name</h1>
      <p className="home-role">Software Developer</p>
      <p className="home-bio">
        I build thoughtful web experiences with clean code and attention to
        detail. Explore my skills, experience, and background — or get in touch
        to collaborate.
      </p>
      <div className="home-actions">
        <Link to="/contact" className="btn">
          Get in touch
        </Link>
        <Link to="/skills" className="btn btn-outline">
          View skills
        </Link>
      </div>
      <div className="home-highlights">
        <div className="highlight">
          <span className="highlight-value">3+</span>
          <span className="highlight-label">Years experience</span>
        </div>
        <div className="highlight">
          <span className="highlight-value">10+</span>
          <span className="highlight-label">Projects shipped</span>
        </div>
        <div className="highlight">
          <span className="highlight-value">Full-stack</span>
          <span className="highlight-label">Web development</span>
        </div>
      </div>
    </section>
  )
}
