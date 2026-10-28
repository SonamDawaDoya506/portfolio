
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
} from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    detail: 'doyasonamdawa226@gmail.com',
    href: 'mailto:doyasonamdawa226@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    detail: 'Explore my repositories',
    href: 'https://github.com/',
    icon: CodeXml,
  },
  {
    label: 'LinkedIn',
    detail: 'Connect professionally',
    href: 'https://www.linkedin.com/',
    icon: BriefcaseBusiness,
  },
]

export default function Contact() {
  return (
    <section className="max-w-3xl">
      <p className="accent text-xs font-semibold tracking-[0.2em]">
        GET IN TOUCH
      </p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
        Let's connect.
      </h1>
      <p className="muted mt-5 max-w-2xl leading-8">
        Whether you have a job opportunity, a project idea, or simply
        want to discuss data and technology, I would be glad to hear
        from you.
      </p>

      <div className="mt-10 space-y-4">
        {contacts.map(({ label, detail, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === 'Email' ? undefined : '_blank'}
            rel={label === 'Email' ? undefined : 'noreferrer'}
            className="surface flex items-center gap-4 rounded-2xl p-5 transition-transform hover:translate-x-1"
          >
            <div
              className="rounded-xl p-3"
              style={{ background: 'var(--surface-hover)' }}
            >
              <Icon size={21} className="accent" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{label}</p>
              <p className="muted mt-1 break-words text-sm">{detail}</p>
            </div>
            <ArrowUpRight size={18} className="muted" />
          </a>
        ))}
      </div>
    </section>
  )
}
