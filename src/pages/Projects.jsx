
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Climate Trend Analysis and Forecasting',
    category: 'Machine Learning',
    description:
      'Climate time-series analysis and forecasting using CNN-BiLSTM for southern Bhutan.',
    technologies: 'Python · CNN-BiLSTM · Data Science',
  },
  {
    title: 'GIS Spatial Mapping and Web Deployment',
    category: 'GIS',
    description:
      'Interactive campus mapping and web deployment of geospatial information.',
    technologies: 'QGIS · qgis2web · OpenLayers',
  },
  {
    title: 'Student Admission Data Analytics',
    category: 'Data Analytics',
    description:
      'Student admission data compilation, validation, analysis, and dashboard development.',
    technologies: 'Python · Data Cleaning · Visualisation',
  },
  {
    title: 'Photography Marketplace',
    category: 'Web Development',
    description:
      'A web application concept for browsing and managing photography marketplace listings.',
    technologies: 'Django · PostgreSQL · JavaScript',
  },
]

const categories = ['All', 'Machine Learning', 'Data Analytics', 'GIS', 'Web Development']

import { useState } from 'react'

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter((project) => project.category === active)

  return (
    <section>
      <p className="accent text-xs font-semibold tracking-[0.2em]">
        MY WORK
      </p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Projects</h1>
      <p className="muted mt-5 max-w-2xl leading-7">
        A selection of projects exploring data science, machine learning,
        geospatial analysis, and software development.
      </p>

      <div className="my-9 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className="rounded-xl border px-4 py-2 text-sm transition-colors"
            style={{
              borderColor: active === category ? 'var(--accent)' : 'var(--border)',
              background: active === category ? 'var(--accent)' : 'var(--surface)',
              color: active === category ? '#fff' : 'var(--muted)',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.title} className="surface rounded-2xl p-6 sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="accent text-sm">{project.category}</span>
              <ArrowUpRight size={20} className="muted" />
            </div>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="muted mt-3 leading-7">{project.description}</p>
            <p className="muted mt-6 border-t pt-4 text-xs"
              style={{ borderColor: 'var(--border)' }}>
              {project.technologies}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
