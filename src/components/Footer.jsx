// import { BriefcaseBusiness, CodeXml, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="mt-20 border-t"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="container-page flex flex-col gap-5 py-8 sm:items-center sm:justify-between">
        <p className="muted text-sm">
          © {new Date().getFullYear()} · Built with React and Vite.
        </p>

        {/* <div className="flex items-center gap-5">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="muted transition-colors hover:accent"
          >
            <CodeXml size={19} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="muted transition-colors hover:accent"
          >
            <BriefcaseBusiness size={19} />
          </a>
           <a
            href="mailto:doyasonamdawa226@gmail.com"
            aria-label="Email"
            className="muted transition-colors hover:accent"
          >
            <Mail size={19} />
          </a>
        </div> */}
      </div>
    </footer>
  )
}
