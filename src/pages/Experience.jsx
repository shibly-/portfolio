const jobs = [
  {
    role: 'Software Developer',
    company: 'Tech Company Inc.',
    period: '2023 — Present',
    description:
      'Develop and maintain customer-facing web applications. Collaborate with design and product teams to deliver features on schedule.',
    highlights: [
      'Led migration to React 18 and improved page load by 40%',
      'Built internal component library used across 3 products',
      'Mentored junior developers on code reviews and best practices',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'Startup Labs',
    period: '2021 — 2023',
    description:
      'Full-stack development on a SaaS platform serving small businesses.',
    highlights: [
      'Implemented payment integration and subscription billing',
      'Wrote unit and integration tests increasing coverage to 80%',
    ],
  },
  {
    role: 'Intern',
    company: 'Digital Agency',
    period: 'Summer 2020',
    description:
      'Assisted with client websites and learned modern frontend workflows.',
    highlights: [
      'Delivered 4 responsive landing pages for clients',
      'Contributed to accessibility audits and fixes',
    ],
  },
]

export default function Experience() {
  return (
    <section className="page">
      <h1 className="page-title">Experience</h1>
      <p className="page-subtitle">
        Roles where I&apos;ve grown as an engineer and delivered real impact.
      </p>
      <div className="timeline">
        {jobs.map((job) => (
          <article key={job.company + job.period} className="timeline-item">
            <h3>{job.role}</h3>
            <p className="timeline-meta">
              {job.company} · {job.period}
            </p>
            <p>{job.description}</p>
            <ul style={{ marginTop: '0.75rem', listStyle: 'none' }}>
              {job.highlights.map((item) => (
                <li
                  key={item}
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    padding: '0.2rem 0',
                  }}
                >
                  → {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
