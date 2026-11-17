
import { useState } from 'react'

const certificateFiles = import.meta.glob(
  '../assets/certificates/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)
const certificates = Object.entries(certificateFiles)
  .filter(([path]) => /\.(pdf|png|jpe?g|webp)$/i.test(path))
  .map(([path, url]) => {
    const filename = path.split('/').pop()
    const extension = filename.split('.').pop().toLowerCase()

    return {
      title: filename.replace(/\.[^/.]+$/, ''),
      url,
      type: extension === 'pdf' ? 'pdf' : 'image',
    }
  })

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="container-page">
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
        Certificates Album
      </h1>

      <p className="mt-3 text-1xl sm:text-1xl">
        A collection of my academic achievements, training programmes,
        workshops, and professional development.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <article
            key={certificate.url}
            className="surface overflow-hidden rounded-xl border border-[var(--border)]"
          >
            <button
              type="button"
              onClick={() => setSelected(certificate)}
              className="block w-full text-left"
            >
              <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-[var(--surface-hover)]">
                {certificate.type === 'image' ? (
                  <img
                    src={certificate.url}
                    alt={certificate.title}
                    className="h-full w-full object-contain transition duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-5xl">📜</span>
                    <p className="accent mt-3 text-sm font-semibold">
                      PDF CERTIFICATE
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h2 className="font-semibold capitalize">
                  {certificate.title}
                </h2>
                <p className="muted mt-2 text-xs">
                  Certificate {index + 1} · Click to preview
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {certificates.length === 0 && (
        <p className="muted mt-10">
          No certificates added yet. Add your certificates to the
          assets/certificates folder.
        </p>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="surface relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
              <h2 className="font-semibold capitalize">
                {selected.title}
              </h2>

              <button
                onClick={() => setSelected(null)}
                className="muted rounded-lg px-3 py-1 hover:bg-[var(--surface-hover)]"
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-[var(--surface-hover)]">
              {selected.type === 'pdf' ? (
                <iframe
                  src={selected.url}
                  title={selected.title}
                  className="h-[75vh] w-full"
                />
              ) : (
                <img
                  src={selected.url}
                  alt={selected.title}
                  className="mx-auto max-h-[75vh] w-auto object-contain"
                />
              )}
            </div>

            <div className="flex justify-end border-t border-[var(--border)] p-4">
              <a
                href={selected.url}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="accent rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-semibold hover:opacity-80"
              >
                Download Certificate ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
