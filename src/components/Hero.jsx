export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-2 min-h-[700px] overflow-hidden rounded-[28px] bg-[#d6edfd] px-6 pt-32 pb-10 sm:mx-3 sm:px-10 lg:min-h-[650px] lg:px-[max(3rem,calc((100vw-1180px)/2))] lg:pt-36"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/45 via-transparent to-white/20">
      </div>
      <div className="absolute -top-20 right-0 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl">
      </div>
      <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-violet-200/70 blur-3xl">
      </div>

      <div className="relative z-10 max-w-xl">
        <p className="mb-5 text-[11px] font-extrabold tracking-[0.1em] text-green-800">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500">
          </span>
          AVAILABLE FOR SELECT PROJECTS
        </p>
        <h1 className="text-5xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-6xl lg:text-7xl">
          Digital products
          <br />
          built
          <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            to matter.
          </span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
          I&apos;m Abdul Musawir, a full-stack developer creating thoughtful web experiences and scalable software with a team of trusted specialists.
        </p>
        <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-4 text-sm font-extrabold text-blue-600 transition hover:border-blue-700 hover:text-blue-700"
            href="#contact"
          >
            Start a project
          </a>
          <a
            className="text-sm font-extrabold text-slate-700 hover:text-blue-600"
            href="#services"
          >
            Explore services
          </a>
        </div>
      </div>

      <div className="absolute right-[-70px] bottom-14 h-80 w-[460px] scale-75 sm:right-0 sm:scale-90 lg:right-[max(2rem,calc((100vw-1240px)/2))] lg:bottom-8 lg:scale-100">
        <div className="absolute right-0 top-8 h-64 w-64 rounded-full bg-linear-to-br from-blue-200 to-violet-200 blur-2xl">
        </div>
        <div className="absolute left-8 top-8 h-64 w-80 rotate-[-8deg] rounded-[24px] border border-white bg-white/90 shadow-2xl shadow-slate-600/15">
          <div className="mx-auto mt-8 grid h-32 w-32 place-items-center rounded-2xl bg-linear-to-br from-blue-600 to-violet-500 text-6xl font-extrabold text-white shadow-xl shadow-blue-500/30">
            AM
          </div>
          <div className="mx-8 mt-7 h-2 rounded bg-blue-100">
          </div>
          <div className="mx-8 mt-3 h-2 w-3/4 rounded bg-blue-100">
          </div>
          <div className="mx-8 mt-3 h-2 w-1/2 rounded bg-blue-100">
          </div>
        </div>
        <div className="absolute right-1 top-0 rounded-xl border border-white bg-white/90 px-4 py-3 font-mono text-[11px] text-slate-600 shadow-lg">
          <b className="text-blue-600">
            const
          </b>
          impact = true;
        </div>
        <div className="absolute bottom-0 left-0 rounded-xl border border-white bg-white/90 px-4 py-3 font-mono text-[11px] text-slate-600 shadow-lg">
          &lt;/build&gt;
        </div>
      </div>

      <div className="absolute right-6 bottom-7 left-6 z-10 hidden justify-between text-[10px] font-medium tracking-wider text-slate-500 lg:flex">
        <span>
          Scroll to discover
        </span>
        <span>
          FULL-STACK DEVELOPER
          <b className="px-1 text-blue-600">
            /
          </b>
          PAKISTAN
        </span>
      </div>
    </section>
  )
}
