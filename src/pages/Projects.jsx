import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Climate Trend Analysis and Forecasting',
    category: 'Machine Learning',
    description:
      'Climate time-series analysis and forecasting using CNN-BiLSTM for southern Bhutan.',
    technologies: 'Python · CNN-BiLSTM · Data Science',
    link: '/projects/climate-forecasting',
  },
  {
    title: 'GIS Spatial Mapping and Web Deployment',
    category: 'GIS',
    description:
      'Interactive campus mapping and web deployment of geospatial information.',
    technologies: 'QGIS · qgis2web · OpenLayers',
    link: '/projects/gis-mapping',
  },
  {
    title: 'Student Admission Data Analytics',
    category: 'Data Analytics',
    description:
      'Student admission data compilation, validation, analysis, and dashboard development.',
    technologies: 'Python · Data Cleaning · Visualisation',
    link: '/projects/admission-analytics',
  },
  {
    title: 'Photography Marketplace',
    category: 'Web Development',
    description:
      'A web application concept for browsing and managing photography marketplace listings.',
    technologies: 'Django · PostgreSQL · JavaScript',
    link: '/projects/photography-marketplace',
  },
]

export default function Projects() {
  const [active] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((project) => project.category === active)

  return (
    <section>
      <p className="accent text-lg font-bold tracking-[0.3em]">MY WORK</p>
      <p className="muted ">
        A selection of projects exploring data science, machine learning,
        geospatial analysis, and software development.
      </p>

      <div className="my-9 flex flex-wrap gap-2">
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => {
          const card = (
            <article key={project.title} className="surface rounded-2xl p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <ArrowUpRight size={20} className="muted" />
              </div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="muted mt-3 leading-7">{project.description}</p>
              <p
                className="muted mt-6 border-t pt-4 text-xs"
                style={{ borderColor: 'var(--border)' }}
              >
                {project.technologies}
              </p>
            </article>
          )

          return project.link ? (
            <Link key={project.title} to={project.link} className="block">
              {card}
            </Link>
          ) : (
            <div key={project.title}>{card}</div>
          )
        })}
      </div>
    </section>
  )
}
