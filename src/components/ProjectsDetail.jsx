import { Link, useParams } from 'react-router-dom'

const projects = {
  'climate-forecasting': {
    // import project images dynamically using require.context
    images: Object.values(
      import.meta.glob('../assets/images/climate*.{png,jpg,jpeg,gif}', {
        eager: true,
        import: 'default',
      }),
    ),
    dashboardUrl: 'https://capstone-dashboard-southern-bhutan.onrender.com',
    title: 'Time-Series Climate Trend Analysis and Forecasting Using CNN-BiLSTM',
    subtitle: 'A Study of Southern Bhutan',
    overview:
      'A collaborative capstone project focused on analysing historical climate patterns and forecasting climate variables in Southern Bhutan using deep learning and machine learning techniques.',
    objectives: [
      'Analyse historical climate data from selected districts in Southern Bhutan.',
      'Identify long-term climate trends and patterns.',
      'Explore CNN-BiLSTM models for time-series climate forecasting.',
      'Address missing climate observations through data preprocessing.',
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'TensorFlow',
      'CNN',
      'BiLSTM',
      'Random Forest',
      'XGBoost',
      'Django',
    ],
    methodology: [
      'Data collection and understanding',
      'Data cleaning and missing-value treatment',
      'Exploratory data analysis and visualisation',
      'Feature engineering and model development',
      'Model evaluation and forecasting',
    ],
    contribution:
      'My primary contribution focused on research, literature review, and methodology. I contributed to understanding existing climate forecasting approaches and identifying suitable methods for the project.',
    results:
      'The project established a workflow for analysing historical climate observations and developing forecasting models. Model performance was assessed using appropriate evaluation metrics.',
    github: '',
  },

  'gis-mapping': {
    gisUrl: 'https://campus-map-website.onrender.com',
    title: 'GIS Spatial Mapping Refinement and Institutional Web Deployment',
    subtitle: 'Interactive Campus Mapping',
    overview:
      'A project focused on refining institutional spatial data and publishing an interactive campus map for easier access to geographical information.',
    objectives: [
      'Refine and organise existing spatial data.',
      'Improve the accuracy and presentation of campus mapping.',
      'Publish an interactive web-based map.',
    ],
    technologies: ['QGIS', 'qgis2web', 'OpenLayers', 'JavaScript', 'HTML', 'CSS'],
    methodology: [
      'Spatial data preparation',
      'Layer refinement and styling in QGIS',
      'Map export using qgis2web',
      'Web map deployment and testing',
    ],
    contribution:
      'Contributed to GIS spatial data refinement and the conversion of the institutional map into an interactive web-based map.',
    results:
      'Produced an interactive campus map that allows users to explore institutional locations through a web browser.',
    github: '',
    images: [],
  },

  'admission-analytics': {
    title: 'Student Admission Data Compilation, Validation, and Dashboard Development',
    subtitle: 'Institutional Admission Data Analysis',
    category: 'Data Analytics',
    year: '2026',
    overview:
      'A data management and analytics project involving the compilation, validation, and analysis of student admission records from institutional sources.',
    objectives: [
      'Compile admission records from different institutional files.',
      'Validate student information and identify inconsistencies.',
      'Organise student records for further analysis.',
      'Develop dashboards to communicate admission insights.',
    ],
    technologies: ['Python', 'Pandas', 'Excel', 'Data Cleaning', 'Data Visualisation'],
    methodology: [
      'Data collection from institutional sources',
      'Data comparison and validation',
      'Data cleaning and transformation',
      'Categorisation and analysis',
      'Dashboard development',
    ],
    contribution:
      'Worked on compiling and validating admission data by comparing IMS records with Exam Cell files, cleaning inconsistencies, and preparing information for dashboard analysis.',
    results:
      'Developed a more organised admission dataset and dashboard-ready information for institutional reporting.',
    github: '',
    images: [],
  },
}

export default function ProjectsDetail() {
  const { projectId } = useParams()
  const project = projects[projectId]

  if (!project) {
    return (
      <main className="container-page py-20">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="accent mt-4 inline-block">
          Back to Projects
        </Link>
      </main>
    )
  }

  return (
    <main className="">
      {/* <Link
        to="/projects"
        className="muted hover:accent"
      >
        <ArrowLeft size={16} />
      </Link> */}
      <section className="item-center mb-12">
        <h1 style={{color: '#3193f4'}} className=" text-3xl font-bold">
          {project.title}
        </h1>

        <p className="muted text-lg">{project.subtitle}</p>
        {project.images.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold"></h2>
          <div
            className={`grid gap-4 ${
              project.images.length === 1
                ? "grid-cols-1 justify-items-center"
                : "md:grid-cols-2"
            }`}
          >
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className={`rounded-xl border border-[var(--border)] ${
                  project.images.length === 1 ? "w-full max-w-2xl" : "w-full"
                }`}
              />
            ))}
          </div>
        </section>
      )}
      </section>

      <section className="mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left text-2xl font-bold">
        Project Overview
        </h2>
        <p className="muted max-w-4xl text-justify leading-8">
        {project.overview}
        </p>
      </section>

      <section className="mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left font-bold">Objectives</h2>
        <ul className="muted text-justify list-disc space-y-3 pl-6">
          {project.objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="container mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left text-2xl font-bold">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="surface rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="container mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left font-bold">Methodology</h2>
        <ol className="muted text-justify list-decimal space-y-3 pl-6">
          {project.methodology.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left font-bold">My Contribution</h2>
        <p className="muted text-justify max-w-4xl leading-8 align-justify">{project.contribution}</p>
      </section>

      <section className="mb-12">
        <h2 style={{color: '#9fa8b3'}} className="mb-4 text-left font-bold">Results & Outcomes</h2>
        <p className="muted text-justify max-w-4xl leading-8 align-justify">{project.results}</p>
      </section>

      {project.dashboardUrl && (
          <p className="muted mt-4 text-base">
            For further information, visit{' '}
            <a
              href={project.dashboardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid btn-styled theme-success inline-block"
            >
              <span className="text-[#4f2ac9]">Interactive Dashboard</span>
            </a>
          </p>
        )}
    </main>
  )
}