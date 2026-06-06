import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import SkillMatrix from '../components/SkillMatrix'
import './Home.css'

export default function Home() {
  return (
    <section className="page home-page">
      <div className="home-hero">
        <div className="home-hero-content">
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
        </div>
        <div className="home-profile">
          <div className='home-profile-placeholder'>
            <img
              src="https://raw.githubusercontent.com/shibly-/portfolio/fd3a581144de01d75567cf45685df7b3752e0df6/profile_picture_of_a_s_m_abdur_rab.jpg"
              alt="A S M Abdur Rab"
              className="home-profile-photo"
            />
          </div>
        </div>
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
