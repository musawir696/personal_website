export default function About() {
  const highlights = [
    {
      label: '2.5+',
      title: 'Years of Experience',
      description: 'Hands-on work building production-ready web products with a strong focus on execution and quality.',
    },
    {
      label: '∞',
      title: 'Full-Stack Coverage',
      description: 'React and Next.js on the frontend, Node.js and Express on the backend, and PostgreSQL, MongoDB, or Supabase for data.',
    },
    {
      label: '✓',
      title: 'Open to Work',
      description: 'Available for full-time roles, freelance projects, and remote collaboration worldwide.',
    },
  ]

  return (
    <section
      id="about"
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center">
        <p className="mb-3 sm:mb-4 text-lg font-extrabold tracking-[0.15em] uppercase text-blue-600">
          ABOUT ME
        </p>
        <h2 className="text-3xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          More than code.
          <br />
          <span className="text-violet-600">A developer who delivers.</span>
        </h2>
      </div>

      <div className="grid gap-8 sm:gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 px-6 sm:px-8 lg:px-10 py-5 sm:py-6 text-base leading-relaxed text-slate-600">
          <p>
            I&apos;m a full-stack developer with 2.5+ years of experience building SaaS platforms, client-facing web applications, and internal dashboards from the ground up. I combine strong frontend execution with reliable backend architecture to create products that feel polished, fast, and dependable.
          </p>
          <p className="mt-4 sm:mt-5">
            I care deeply about performance, clean architecture, and user experience. Whether you need an MVP, a modern web presence, or a dependable developer to support your team, I focus on shipping practical solutions with clear communication and thoughtful execution.
          </p>
            <a
            className="mt-6 sm:mt-7 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-md shadow-blue-500/25 hover:bg-blue-700 transition-colors"
            href="#contact"
          >
            Let&apos;s work together →
            </a>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
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
