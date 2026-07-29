import { services } from '../data/services'

export default function Services() {
  return (
    <section
      id="services"
      className="bg-linear-to-br from-blue-50 to-violet-50 px-6 py-20 sm:px-10 lg:px-[max(3rem,calc((100vw-1120px)/2))] lg:py-28"
    >
      <header className="mb-12 grid gap-6 lg:grid-cols-[1fr_340px] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] font-extrabold tracking-[0.1em] text-blue-600">
            02 — SERVICES
          </p>
          <h2 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
            What I can
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              build for you.
            </span>
          </h2>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-500">
          I combine strategy, design thinking, and engineering to take your idea from concept to launch.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <article
            className="flex min-h-80 flex-col rounded-[20px] border border-white bg-white/90 p-6 shadow-lg shadow-slate-500/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-500/10"
            key={service.number}
          >
            <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>
                {service.number}
              </span>
              <b className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-xl font-medium text-blue-600">
                {service.icon}
              </b>
            </div>
            <h3 className="mt-9 text-2xl leading-tight font-bold tracking-tight text-slate-900">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              {service.text}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {service.tags.map((tag) => (
                <span
                  className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[9px] text-slate-500"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              className="mt-5 flex justify-between border-t border-slate-100 pt-4 text-sm font-extrabold text-blue-600 hover:text-blue-700"
              href="#contact"
            >
              Let&apos;s build it
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
