import { Link } from 'react-router-dom'
import SkillMatrix from '../components/SkillMatrix'
import './Home.css'

export default function Home() {
  return (
    <section className="page home-page">
      <p className="home-greeting">Hello, I&apos;m</p>
      <h1 className="home-name">A S M Abdur Rab</h1>
      <p className="home-role">Lead Software Developer at IQVIA</p>
      <p className="home-bio">
        Software engineer with 16+ years including 14+ years of experience in multi-national software companies. Experience in web-based software development & delivery (implementation, support & operations) and providing IT solutions to the life sciences/pharmaceutical domain-based industries.
      </p>
      <p className="home-bio">
        Full-Stack Engineer  | JavaScript | NodeJS | Angular | MongoDB | C# | .NET Core | PHP | MySQL | Microservices | Web API | Automation | Legacy Project Migration | Power BI
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
          <span className="highlight-value">16+</span>
          <span className="highlight-label">Years experience</span>
        </div>
        <div className="highlight">
          <span className="highlight-value">20+</span>
          <span className="highlight-label">Projects shipped</span>
        </div>
        <div className="highlight">
          <span className="highlight-value">Full-stack</span>
          <span className="highlight-label">Web Application Development</span>
        </div>
      </div>
      <SkillMatrix />
    </section>
  )
}
