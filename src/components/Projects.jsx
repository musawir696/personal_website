import { projects } from '../data/projects'
import { GitHubIcon } from './icons'

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-linear-to-br from-blue-50 to-violet-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <header className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
        <p className="mb-3 sm:mb-4 text-lg sm:text-xl font-extrabold tracking-[0.15em] uppercase text-violet-600">
          PROJECTS
        </p>
        <h2 className="text-3xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          Built to prove
          <br />
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            real product impact.
          </span>
        </h2>
        <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed text-slate-500 max-w-xl mx-auto">
          These projects reflect the kind of work I deliver for hiring teams and freelance clients: thoughtful UI, reliable engineering, and solutions built to scale.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            className="overflow-hidden rounded-[18px] sm:rounded-[22px] border border-white bg-white/90 shadow-lg shadow-slate-500/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-500/15"
            key={project.title}
          >
            <div
              className={`group/img relative flex h-52 sm:h-60 md:h-64 items-center justify-center overflow-hidden bg-linear-to-br ${project.visual}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover/img:scale-105"
                />
              ) : (
                <>
                  <div
                    className={`grid h-20 sm:h-24 w-36 sm:w-40 rotate-[-8deg] place-items-center rounded-[20px] text-2xl sm:text-3xl font-extrabold text-white shadow-2xl ${project.badge}`}
                  >
                    {project.mark}
                  </div>
                  <i className="absolute top-10 right-6 h-2 w-14 sm:w-18 rounded-full bg-white/70" />
                  <i className="absolute top-16 right-6 h-2 w-9 sm:w-11 rounded-full bg-white/70" />
                  <i className="absolute bottom-8 left-7 h-2 w-7 sm:w-9 rounded-full bg-white/70" />
                </>
              )}
            </div>

            <div className="p-4 sm:p-6">
              <p className={`text-[10px] sm:text-[11px] font-extrabold tracking-[0.1em] uppercase ${project.detail}`}>
                {project.subtitle}
              </p>
              <h3 className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                {project.title}
              </h3>
              <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3 sm:line-clamp-none">
                {project.description}
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[9px] text-slate-500"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 sm:mt-6 flex items-center gap-4 sm:gap-5 border-t border-slate-100 pt-3.5 sm:pt-4">
                {project.github ? (
                  <a
                    className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-blue-600 transition-colors"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon className="h-5 w-5" />
                    GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-300">
                    <GitHubIcon className="h-5 w-5" />
                    GitHub
                  </span>
                )}
                <a
                  className={`ml-auto inline-flex items-center gap-1.5 text-sm font-extrabold transition-colors ${project.detail} hover:opacity-80`}
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
