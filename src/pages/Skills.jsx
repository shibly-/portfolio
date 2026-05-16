import { skillCategories } from '../data/skillCategories'

export default function Skills() {
  return (
    <section className="page">
      <h1 className="page-title">Technical Skills</h1>
      <p className="page-subtitle">
        Technologies and tools I use to design, build, and ship reliable
        software.
      </p>
      <div className="card-grid">
        {skillCategories.map((cat) => (
          <article key={cat.title} className="card">
            <h3>{cat.title}</h3>
            <div className="tag-list">
              {cat.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
