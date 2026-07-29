import heroImage from '../assets/image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-2 sm:mx-3 overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#d6edfd] px-5 pt-24 pb-12 sm:px-10 sm:pt-28 sm:pb-16 lg:px-[max(3rem,calc((100vw-1180px)/2))] lg:pt-36 lg:pb-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 bg-linear-to-b from-white/45 via-transparent to-white/20 pointer-events-none" />
      <div className="absolute -top-20 right-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-200/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-violet-200/70 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        {/* Text block */}
        <div className="max-w-xl mx-auto text-center lg:mx-0 lg:text-left">
          <p className="mb-4 sm:mb-5 text-[11px] font-extrabold tracking-[0.1em] text-green-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            AVAILABLE FOR SELECT PROJECTS
          </p>
          <h1 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl sm:leading-none lg:text-7xl">
            Digital products
            <br />
            built{' '}
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              to matter.
            </span>
          </h1>
          <p className="mt-4 sm:mt-5 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed text-slate-600 sm:text-lg">
            I&apos;m Abdul Musawir, a full-stack developer creating thoughtful web experiences and scalable software with a team of trusted specialists.
          </p>
          <div className="mt-6 sm:mt-7 flex flex-col items-center gap-4 sm:flex-row sm:items-center lg:justify-start justify-center">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 bg-white px-5 py-3.5 sm:py-4 text-sm font-extrabold text-blue-600 transition hover:border-blue-700 hover:text-blue-700 shadow-sm"
              href="#contact"
            >
              Start a project
            </a>
            <a
              className="text-sm font-extrabold text-slate-700 hover:text-blue-600 transition-colors"
              href="#services"
            >
              Explore services →
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/80 bg-white/80 shadow-2xl shadow-slate-500/10 ring-1 ring-slate-950/5">
          <img
            src={heroImage}
            alt="Hero illustration"
            className="h-[220px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[400px]"
          />
        </div>
      </div>

      {/* Bottom meta — desktop only */}
      <div className="absolute right-6 bottom-7 left-6 z-10 hidden justify-between text-[10px] font-medium tracking-wider text-slate-500 lg:flex">
        <span>Scroll to discover</span>
        <span>
          FULL-STACK DEVELOPER
          <b className="px-1 text-blue-600">/</b>
          PAKISTAN
        </span>
      </div>
    </section>
  )
}
