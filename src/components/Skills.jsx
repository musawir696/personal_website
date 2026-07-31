const skillGroups = [
  {
    title: 'Frontend',
    details: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Backend',
    details: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication', 'Serverless Functions', 'Stripe Integration'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Databases',
    details: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Data Modelling', 'Query Optimisation'],
    accent: 'from-emerald-500 to-lime-500',
  },
  {
    title: 'Tools & Deployment',
    details: ['Git & GitHub', 'Vercel', 'Netlify', 'VS Code', 'CI/CD Pipelines', 'Environment Management'],
    accent: 'from-slate-600 to-slate-400',
  },
  {
    title: 'Design & UX',
    details: ['Responsive Design', 'Accessibility (a11y)', 'Component Libraries', 'UI/UX Principles'],
    accent: 'from-rose-500 to-orange-400',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-50 via-sky-50 to-blue-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 sm:mb-4 text-lg font-extrabold tracking-[0.15em] uppercase text-blue-600">
          SKILLS
        </p>
        <h2 className="text-3xl font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          The stack I use to build
          <br />
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            production-grade software.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-500 max-w-2xl mx-auto">
          The tools, languages, and platforms I rely on to ship reliable, scalable, and maintainable applications.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <div
            key={group.title}
            className={`rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
              // Make the last card (5th) span 2 cols on lg if grid has 3 cols and count is odd
              i === skillGroups.length - 1 && skillGroups.length % 3 !== 0
                ? 'sm:col-span-2 lg:col-span-1'
                : ''
            }`}
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r ${group.accent} px-4 py-2 text-sm font-bold text-white shadow-lg shadow-slate-900/10`}>
              {group.title}
            </div>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
              {group.details.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
