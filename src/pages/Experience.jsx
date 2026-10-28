
const experience = [
  {
    period: '2026',
    title: 'BSc Data Science — Final Year',
    organisation: 'Sherubtse College',
    description:
      'Academic work involving data analysis, machine learning, software development, and a climate forecasting capstone project.',
  },
  {
    period: '2026',
    title: 'GIS Mapping and Admission Data Analytics',
    organisation: 'Sherubtse College · Project Experience',
    description:
      'Contributed to campus web mapping and student admission data validation, analysis, and dashboard development.',
  },
]

const development = [
  'Python and data analysis',
  'Machine learning and time-series forecasting',
  'Web application development',
  'GIS and spatial data visualisation',
  'Database design and SQL',
]

export default function Experience() {
  return (
    <section>
      <p className="accent text-xs font-semibold tracking-[0.2em]">
        MY BACKGROUND
      </p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
        Experience & Education
      </h1>
      <p className="muted mt-5 max-w-2xl leading-7">
        My academic journey, project experience, and ongoing development
        across data science and software engineering.
      </p>

      <div className="mt-12 space-y-8">
        {experience.map((item) => (
          <article
            key={item.title}
            className="border-l-2 pl-6 sm:pl-8"
            style={{ borderColor: 'var(--accent)' }}
          >
            <p className="accent text-sm font-semibold">{item.period}</p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="muted mt-1 text-sm">{item.organisation}</p>
            <p className="muted mt-4 max-w-2xl leading-7">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="surface mt-14 rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Technical focus</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {development.map((skill) => (
            <li key={skill} className="muted flex gap-3 leading-6">
              <span className="accent">↗</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
