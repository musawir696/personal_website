export default function About() {
  const highlights = [
    {
      label: '5+',
      title: 'Projects Shipped',
      description: 'SaaS platforms, marketplaces, booking systems, and dashboards — from MVP to production.',
    },
    {
      label: '∞',
      title: 'Full-Stack Coverage',
      description: 'React & Next.js on the frontend. Node.js, Express, and PostgreSQL/MongoDB on the backend.',
    },
    {
      label: '✓',
      title: 'Open to Work',
      description: 'Available for full-time software engineering roles and freelance contracts — remote worldwide.',
    },
  ]

  return (
    <section
      id="about"
      className="bg-white px-5 py-16 sm:px-10 sm:py-20 lg:px-[max(3rem,calc((100vw-1120px)/2))] lg:py-28"
    >
      <div className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
        <p className="mb-3 sm:mb-4 text-lg sm:text-xl font-extrabold tracking-[0.15em] uppercase text-blue-600">
          ABOUT ME
        </p>
        <h2 className="text-3xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          More than code.
          <br />
          <span className="text-violet-600">A developer who ships.</span>
        </h2>
      </div>

      <div className="grid gap-8 sm:gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div className="text-base leading-relaxed text-slate-600">
          <p>
            I&apos;m a full-stack developer with hands-on experience building SaaS platforms, client-facing web applications, and internal dashboards from the ground up. I work across the full stack — React and Next.js on the frontend, Node.js and Express on the backend, and PostgreSQL, MongoDB, or Supabase for data.
          </p>
          <p className="mt-4 sm:mt-5">
            I care deeply about performance, clean architecture, and user experience. Whether you&apos;re a startup that needs an MVP, a business looking to modernise its web presence, or a team that needs a reliable extra developer — I deliver working software on time, with clear communication throughout.
          </p>
          <a
            className="mt-6 sm:mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 hover:bg-blue-700 transition-colors"
            href="#contact"
          >
            Let&apos;s work together →
          </a>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map(({ label, title, description }) => (
            <div
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-6 transition hover:border-blue-100 hover:bg-blue-50/30"
              key={title}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white">
                  {label}
                </span>
                <strong className="text-base sm:text-lg tracking-tight text-slate-900">
                  {title}
                </strong>
              </div>
              <span className="mt-3 block text-xs leading-relaxed text-slate-500">
                {description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
