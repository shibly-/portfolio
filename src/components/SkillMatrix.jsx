import { skillCategoriesMajor } from '../data/skillCategoriesMajor'
import { getSkillIcon } from '../data/skillIcons'
import './SkillMatrix.css'

export default function SkillMatrix() {
  return (
    <section className="skill-matrix" aria-labelledby="skill-matrix-heading">
      {skillCategoriesMajor.map((category) => (
        <div key={category.title} className="skill-matrix-category">
          <h3 className="skill-matrix-category-title">{category.title}</h3>
          <ul className="skill-matrix-grid">
            {category.skills.map((skill) => {
              const { Icon, color } = getSkillIcon(skill)
              return (
                <li key={`${category.title}-${skill}`} className="skill-matrix-item">
                  <span
                    className="skill-matrix-icon"
                    style={{ color, backgroundColor: `${color}18` }}
                    aria-hidden
                  >
                    <Icon size={26} />
                  </span>
                  <span className="skill-matrix-label">{skill}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}
