export default function About() {
  const highlights = [
    ['Full-stack', 'From interface to infrastructure'],
    ['Collaborative', 'Focused expertise, when needed'],
    ['Human-first', 'Technology made simple'],
  ]

  return (
    <section
      id="about"
      className="bg-white px-6 py-20 sm:px-10 lg:px-[max(3rem,calc((100vw-1120px)/2))] lg:py-28"
    >
      <p className="mb-6 text-[11px] font-extrabold tracking-[0.1em] text-blue-600">
        01 — ABOUT
      </p>
      <div className="grid gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <h2 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
          More than code.
          <br />
          <span className="text-violet-600">
            A partner in progress.
          </span>
        </h2>
        <div className="text-base leading-relaxed text-slate-600">
          <p>
            I turn ideas into polished digital products. From the first strategy session to the last deployment, I work closely with clients to create solutions people enjoy using.
          </p>
          <p className="mt-5">
            When a project calls for more, I bring in my network of designers, developers, and specialists—giving you one focused team and a stronger final product.
          </p>
          <a
            className="mt-5 inline-flex items-center gap-2 border-b border-slate-400 pb-2 text-sm font-extrabold text-blue-600 hover:border-blue-600"
            href="#contact"
          >
            Get to know my process
          </a>
        </div>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-18">
        {highlights.map(([title, description]) => (
          <div
            className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            key={title}
          >
            <strong className="block text-lg tracking-tight text-slate-900">
              {title}
            </strong>
            <span className="mt-1 block text-xs text-slate-500">
              {description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
