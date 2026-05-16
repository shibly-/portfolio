const education = [
  {
    degree: 'B.S. Computer Science',
    school: 'University of Example',
    period: '2017 — 2021',
    details:
      'Focus on software engineering, algorithms, and databases. Graduated with honors.',
  },
  {
    degree: 'Relevant Coursework',
    school: 'Core CS Curriculum',
    period: '',
    details: null,
    courses: [
      'Data Structures & Algorithms',
      'Web Development',
      'Database Systems',
      'Software Engineering',
      'Machine Learning (elective)',
    ],
  },
]

export default function Education() {
  return (
    <section className="page">
      <h1 className="page-title">Education</h1>
      <p className="page-subtitle">
        Academic foundation that supports my work in software development.
      </p>
      <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
        {education.map((item) => (
          <article key={item.degree} className="card">
            <h3>{item.degree}</h3>
            <p className="timeline-meta" style={{ marginBottom: '0.5rem' }}>
              {item.school}
              {item.period ? ` · ${item.period}` : ''}
            </p>
            {item.details && <p>{item.details}</p>}
            {item.courses && (
              <ul style={{ marginTop: '0.75rem' }}>
                {item.courses.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
