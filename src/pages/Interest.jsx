const interests = [
  {
    title: 'Open Source',
    description:
      'Contributing to community projects and sharing knowledge through code and documentation.',
  },
  {
    title: 'Learning',
    description:
      'Staying current with web standards, new frameworks, and computer science fundamentals.',
  },
  {
    title: 'Reading',
    description:
      'Tech blogs, sci-fi novels, and books on productivity and team leadership.',
  },
]

export default function Interest() {
  return (
    <section className="page">
      <h1 className="page-title">Interest</h1>
      <p className="page-subtitle">
        What keeps me curious and energized beyond writing code.
      </p>
      <div className="card-grid">
        {interests.map((item) => (
          <article key={item.title} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
