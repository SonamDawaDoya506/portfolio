
const experience = [
  {
    // import project images dynamically using require.context
    images: Object.values(
      import.meta.glob('../assets/images/dashboard*.{png,jpg,jpeg,gif}', {
        eager: true,
        import: 'default',
      })),
    title: 'GIS Mapping and Admission Data Analytics',
    organisation: 'Sherubtse College · Data Science Internship',
    description: [
      'Compiled, validated, and cleaned student admission records to improve data accuracy and consistency.',
      'Performed detailed record verification using CID-based cross-checking and manual data validation.',
      'Developed dashboards to support institutional reporting and administrative decision making.',
      'Prepared organised datasets for analysis while maintaining high standards of data integrity and confidentiality.',
      'Assisted in developing an interactive GIS-based institutional web map using QGIS and OpenLayers.'
    ]
  },
  {
    title: 'BSc Data Science — Final Year',
    organisation: 'Sherubtse College',
    description:[
      'Completed a capstone project on climate time-series analysis and forecasting using CNN-BiLSTM for southern Bhutan.',
      'Developed a GIS-based interactive campus map using QGIS and OpenLayers.',
      'Gained experience in data analysis, machine learning, and web application development.',]
  }
]

const development = [
  'Python and data analysis',
  'Database design and SQL',
  'Data cleaning and validation',
  'Web application development',
  'GIS and spatial data visualisation and mapping',
  'Machine learning and predictive modelling',
]

export default function Experience() {
  return (
    <section>
      <p className="accent font-semibold tracking-[0.2em]">
        MY BACKGROUND
      </p>
      <h1 className="mt-3 text-4xl font-bold text-left sm:text-5xl">
        Experience
      </h1>
      <p className="muted mt-1 text-justify text-sm leading-7">
        My academic{' '}
          <span className="rounded bg-[var(--surface-hover)] px-1 py-1 font-serif italic accent">
            journey,
          </span> project{' '}
        <span className="rounded bg-[var(--surface-hover)] px-1 py-1">
          experience,
        </span> and ongoing{' '}
        <span className="inline-block rounded-md border border-[var(--accent)] bg-[var(--surface-hover)] px-2 py-1 text-xs font-bold tracking-wide accent">
          DEVELOPMENT
        </span>
        {' '}with a  {''}
        <span className="accent">
           Data Science
        </span>
        {' '}knowledge accumulated within my four year of stay or study at Sherubtse College.
      </p>
      <div className="mt-8 space-y-8">
        {experience.map((item) => (
          <article
            key={item.title}
            className="border-l-2 pl-6 sm:pl-8"
            style={{ borderColor: 'var(--accent)' }}
          >
            <p className="accent text-sm font-semibold px-2 py-1 rounded-md">
              {item.period}
            </p>
            <h2 className="mt-2 text-xl font-semibold">{item.title}</h2>
            <p className="muted mt-1 text-sm">{item.organisation}</p>
            {item.images?.length > 0 && (
              <div
                className={`mt-5 grid gap-4 ${
                  item.images.length === 1 ? 'grid-cols-1' : 'md:grid-cols-2'
                }`}
              >
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${item.title} screenshot ${index + 1}`}
                    className="w-full rounded-xl border border-[var(--border)]"
                  />
                ))}
              </div>
            )}
            {Array.isArray(item.description) ? (
              <ul className="space-y-2 text-left max-w-2xl mx-auto mt-3 list-disc pl-6">
                {item.description.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-0.5">❖</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-left max-w-2xl mx-auto">{item.description}</p>
            )}
          </article>
            ))}
      </div>

      <div className="surface mt-14 rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold">Technical focus</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {development.map((skill) => (
            <li key={skill} className="muted text-justify flex gap-3">
              <span className="accent">↗</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <section className="mt-14">
        <div>
          <h1 className="mt-2 text-4xl font-bold text-left sm:text-5xl">
            Education
          </h1>
          <ul className="mt-6 space-y-4">
            <p className="muted text-justify flex gap-3 text-xl font-semibold tracking-wide">
              2022 - 2026
            </p>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Bachelor of Science in Data Science, Sherubtse College, Royal University of Bhutan
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-6 space-y-4">
            <p className="muted text-justify flex gap-3 text-xl font-semibold tracking-wide">
              2020 - 2021
            </p>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              High School, Science Stream, Tendruk Central School, Royal Education Council of Bhutan
            </li>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Served as SAP Captain for a year, 2021
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-6 space-y-4">
            <p className="muted text-justify flex gap-3 text-xl font-semibold tracking-wide">
              2018 - 2019
            </p>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Middle School, Dorokha Central School, Royal Education Council of Bhutan
            </li>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Served as Health-Vice Captain for a year, 2018
            </li>
          </ul>
        </div>
        <div>
          <ul className="mt-6 space-y-4">
            <p className="muted text-justify flex gap-3 text-xl font-semibold tracking-wide">
              2009 - 2017
            </p>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Lower School, Dorokha Central School, Royal Education Council of Bhutan
            </li>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Served as House Captain for a year, 2017
            </li>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Awarded Best House Captain for a year, 2017
            </li>
            <li className="muted text-justify flex gap-3">
              <span className="ml-18 accent">★</span>
              Awarded Best Student of the Month(August), 2017
            </li>
          </ul>
        </div>
      </section>
    </section>
  )
}
