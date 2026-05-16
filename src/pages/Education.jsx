const education = [
  {
    degree: 'Bachelor of Science (with Honors) in Computer Science & Engineering',
    school: 'University of Dhaka',
    period: '(First Class), 2007',
    details:
      'Focus on software engineering, algorithms, and databases. Graduated with honors.',
  },
  {
    degree: 'Relevant Coursework',
    school: 'Few Core CSE Curriculum',
    period: '',
    details: null,
    courses: [
      'Data Structures & Algorithms',
      'Discrete Mathematics',
      'Object Oriented Programming',
      'Software Engineering',
      'Database Management System',
      'Programming Language Concepts',
      'Artificial Intelligence',
      'Information System Design & Analysis'
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
