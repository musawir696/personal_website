import heroImage from '../assets/image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-0 overflow-hidden bg-[#d6edfd] px-3 py-12 sm:mx-3 sm:px-6 sm:py-20 lg:mx-4 lg:px-8 lg:py-24 rounded-none sm:rounded-[28px]"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/45 via-transparent to-white/20 pointer-events-none" />
      <div className="absolute -top-20 right-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-200/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-violet-200/70 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-6 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="w-full text-center lg:text-left">

          {/* Availability badge */}
          <p className="mb-3 sm:mb-4 text-[10px] font-extrabold tracking-widest text-green-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            AVAILABLE FOR FULL-TIME ROLES &amp; FREELANCE
          </p>

          {/* Headline — who I am and what I do */}
          <h1 className="text-xl leading-tight font-extrabold tracking-tighter text-slate-900 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            Full-Stack Developer
            <br />
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              crafting modern digital products.
            </span>
          </h1>

          {/* Tech stack marquee */}
          

          {/* Subtitle — clear identity statement */}
          <p className="mx-auto mt-4 max-w-lg text-xs leading-relaxed text-slate-600 sm:mt-6 sm:text-sm lg:mx-0">
            I&apos;m <strong className="text-slate-800">Abdul Musawir</strong> — a full-stack developer with 2.5+ years of experience building reliable web products for startups, businesses, and growing teams.
          </p>

          {/* CTAs */}
          <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:mt-6 sm:flex-row sm:items-center sm:gap-3 lg:justify-start">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-sm"
              href="#contact"
            >
              Let&apos;s work together
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 shadow-sm sm:py-3 sm:text-sm"
              href="#projects"
            >
              Explore my work →
            </a>
          </div>
        </div>

        {/* Hero image card */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/80 bg-white/80 shadow-2xl shadow-slate-500/10 ring-1 ring-slate-950/5 hero-card-3d"
>
          <div className="hero-card-inner overflow-hidden">
            <img
              src={heroImage}
              alt="Abdul Musawir — Full-Stack Developer"
              className="h-48 w-full object-cover sm:h-56 md:h-72 lg:h-96"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-6 bottom-7 left-6 z-10 hidden justify-between text-[10px] font-medium tracking-wider text-slate-500 lg:flex">
        <span>Scroll to discover</span>
        <span>
          FULL-STACK DEVELOPER
          <b className="px-1 text-blue-600">/</b>
          PAKISTAN · REMOTE
        </span>
      </div>
    </section>
  )
}
