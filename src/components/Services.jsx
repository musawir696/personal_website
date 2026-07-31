import { services } from '../data/services'

export default function Services() {
  return (
    <section
      id="services"
      className="bg-linear-to-br from-blue-50 to-violet-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Header */}
      <header className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
        <p className="mb-3 sm:mb-4 text-lg font-extrabold tracking-[0.15em] uppercase text-blue-600">
          SERVICES
        </p>
        <h2 className="text-3xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          Services designed
          <br />
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            for growth and clarity.
          </span>
        </h2>
        <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] leading-relaxed text-slate-500 max-w-xl mx-auto">
          I combine thoughtful product strategy, polished UI, and reliable engineering to turn ideas into high-quality digital experiences.
        </p>
      </header>

      {/* Cards grid — 1 col mobile, 2 col sm, 3 col md+ */}
      <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <article
            className="group relative min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-slate-200/50 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
            key={service.title}
          >
            {/* Full-width AI image */}
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Dark gradient overlay + content */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/20 p-5 sm:p-7">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-sm">
                {service.title}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-sm leading-relaxed text-slate-200 drop-shadow-xs">
                {service.text}
              </p>
              <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                {service.tags.map((tag) => (
                  <span
                    className="rounded-full border border-white/20 bg-white/15 px-2.5 sm:px-3 py-1 font-mono text-[9px] sm:text-[10px] font-semibold text-white shadow-xs backdrop-blur-md"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="group/link mt-5 sm:mt-6 flex items-center justify-between border-t border-white/20 pt-3.5 sm:pt-4 text-sm font-extrabold text-blue-400 transition-colors hover:text-blue-300"
                href="#contact"
              >
                <span>Let&apos;s build it</span>
                <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}