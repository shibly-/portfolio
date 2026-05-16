const certification = [
  {
    degree: 'Trainings & Certifications',
    period: '',
    details: null,
    courses: [
      'Completed three (L1, L2 & L3) Power BI certifications organized by IQVIA',
      'Conducted in-house trainings on Web Application development in IQVIA',
      'Completed certification on Microsoft Azure Fundamental & AI Fundamental',
      'Completed online courses on MongoDB, Node.js, Azure AI, Scrum and Project Management',
      'Participated on Generative AI, WhizAI trainings by IQVIA',
      'Participated on Node.js training, organized by IQVIA, India (2 Days)',
      'Participated on Angular, .NET Core, Web API trainings by IQVIA, Dhaka',
      'Participated on web application development training using Drupal by The Jaxara IT Ltd'
    ],
  },
]

export default function Certification() {
  return (
    <section className="page">
      <h1 className="page-title">Trainings & Certifications</h1>
      <p className="page-subtitle">
        Notable in-house trainings & online courses (order by most recent):
      </p>
      <div className="card-grid" style={{ gridTemplateColumns: '1fr' }}>
        {certification.map((item) => (
          <article key={item.degree} className="card">
            <h3>{item.degree}</h3>
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
