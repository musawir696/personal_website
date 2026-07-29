import { projects } from '../data/projects'
import { GitHubIcon } from './icons'

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-linear-to-br from-blue-50 to-violet-50 px-6 py-20 sm:px-10 lg:px-[max(2rem,calc((100vw-1320px)/2))] lg:py-28"
    >
      <div className="mb-11 grid gap-6 lg:grid-cols-[1fr_355px] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] font-extrabold tracking-[0.1em] text-violet-600">
            03 — SELECTED WORK
          </p>
          <h2 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
            Built for real
            <br />
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              world impact.
            </span>
          </h2>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-500">
          From SaaS products to booking platforms, these projects combine thoughtful experiences with reliable engineering.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            className="overflow-hidden rounded-[22px] border border-white bg-white/90 shadow-lg shadow-slate-500/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-500/15"
            key={project.title}
          >
            <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-linear-to-br ${project.visual}`}>
              <div className={`grid h-24 w-40 rotate-[-8deg] place-items-center rounded-[20px] text-3xl font-extrabold text-white shadow-2xl ${project.badge}`}>
                {project.mark}
              </div>
              <i className="absolute top-10 right-6 h-2 w-18 rounded-full bg-white/70">
              </i>
              <i className="absolute top-16 right-6 h-2 w-11 rounded-full bg-white/70">
              </i>
              <i className="absolute bottom-8 left-7 h-2 w-9 rounded-full bg-white/70">
              </i>
            </div>

            <div className="p-6">
              <p className={`text-[11px] font-extrabold tracking-[0.1em] uppercase ${project.detail}`}>
                {project.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <p className="mt-3 min-h-17 text-sm leading-relaxed text-slate-500">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[9px] text-slate-500"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-5 border-t border-slate-100 pt-4">
                {project.github ? (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-600 hover:text-slate-950"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-400">
                    <GitHubIcon />
                    GitHub soon
                  </span>
                )}
                <a
                  className={`ml-auto inline-flex items-center gap-2 text-sm font-extrabold ${project.detail}`}
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
