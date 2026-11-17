
import {
  ArrowDownRight,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const skills = [
  'Python',
  'Machine Learning',
  'Data Analysis',
  'React',
  'Django',
  'SQL',
  'GIS',
  'Data Visualisation',
]

const featuredProjects = [
  {
    number: '01',
    category: 'MACHINE LEARNING',
    title: 'Climate Forecasting',
    description:
      'Time-series climate trend analysis and forecasting using CNN-BiLSTM for southern Bhutan.',
    technologies: ['Python', 'CNN-BiLSTM', 'Time Series'],
  },
  {
    number: '02',
    category: 'GEOSPATIAL ANALYTICS',
    title: 'GIS Web Mapping',
    description:
      'An interactive campus map created to make spatial information accessible through the web.',
    technologies: ['QGIS', 'OpenLayers', 'GIS'],
  },
  {
    number: '03',
    category: 'DATA ANALYTICS',
    title: 'Admission Data Analytics',
    description:
      'Student admission data validation, analysis and dashboard development.',
    technologies: ['Python', 'Data Cleaning', 'Dashboards', 'Excel '],
  },
]

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-8">
      <section className="flex flex-col">
        <div
          className="mb-7 flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm"
          style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
          Data Science & Data Analytics 
        </div>

        <p className="muted mb-4 text-sm font-medium uppercase tracking-[0.22em]">
          Hello, welcome to my portfolio
        </p>

        <h1 className="max-w-4xl text-4xl ">
          Turning data into {''}
          <span className="accent"> meaningful solutions.</span>
        </h1>

        <p className="muted text-center mt-6 text-justify text-lg">
          I am a detail-oriented Data Science graduate with strong analytical, data validation, and 
          problem-solving skills. Experienced in data analysis, dashboard development, GIS mapping, 
          and maintaining accurate records through internship projects at Sherubtse College. Proficient 
          in Python, Excel, SQL, and data visualisation, with a strong commitment to accuracy, 
          confidentiality, and teamwork. Eager to apply analytical skills in a professional setting to contribute to data-driven decision-making and organisational success.
        </p>

        <div className="mt-5 items-center flex-wrap gap-3 sm:mt-8 sm:flex sm:justify-center ">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white transition-opacity hover:opacity-85"
            style={{ background: 'var(--accent)' }}
          >
            Explore projects <ArrowRight size={18} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-colors hover:opacity-75"
            style={{ borderColor: 'var(--border)' }}
          >
            Get in touch <ArrowDownRight size={18} />
          </Link>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            {/* <p className="accent text-xs font-semibold tracking-[0.2em] items-center">
              WHAT I WORK WITH
            </p> */}
            <h2 className="text-2xl font-bold sm:text-3xl">
              Skills & technologies
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="surface rounded-xl px-4 py-3 text-sm"
              style={{ color: 'var(--muted)' }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            {/* <p className="accent mb-2 text-xs font-semibold tracking-[0.2em]">
              SELECTED WORK
            </p> */}
            <h2 className="text-2xl font-bold sm:text-3xl">
              Featured projects
            </h2>
          </div>

          <Link
            to="/projects"
            className="accent inline-flex items-center gap-2 text-sm font-semibold"
          >
            All projects <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.number}
              className="surface rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="mb-9 flex items-center justify-between">
                <span className="muted text-sm">{project.number}</span>
                <ArrowUpRightIcon />
              </div>

              <p className="accent text-xs font-semibold tracking-wider">
                {project.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                {project.title}
              </h3>

              <p className="muted mt-3 min-h-[84px] text-sm leading-7">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md px-2 py-1 text-xs"
                    style={{
                      background: 'var(--surface-hover)',
                      color: 'var(--muted)',
                    }}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="surface rounded-3xl p-7 sm:p-10"
      >
        <p className="accent text-xs font-semibold tracking-[0.2em] pb-2 text-center">
          LET'S CONNECT
        </p>
        <h2 className="">
          Have a project or opportunity in mind?
        </h2>
        <p className="muted mt-4 text-center text-lg leading-7">
          I am open to connecting with people working on interesting
          data, technology, and software projects.
        </p>
        <Link
          to="/contact"
          className="mt-7 inline-flex items-center gap-2 font-semibold accent"
        >
          Contact me <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  )
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="muted rotate-[-135deg]" size={20} />
}
