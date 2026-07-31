import heroImage from '../assets/image.png'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-2 sm:mx-3 overflow-hidden rounded-[20px] sm:rounded-[28px] bg-[#d6edfd] px-5 pt-24 pb-12 sm:px-10 sm:pt-28 sm:pb-16 lg:px-[max(3rem,calc((100vw-1180px)/2))] lg:pt-36 lg:pb-20"
    >
      <div className="absolute inset-0 bg-linear-to-b from-white/45 via-transparent to-white/20 pointer-events-none" />
      <div className="absolute -top-20 right-0 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-blue-200/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 h-56 w-56 sm:h-72 sm:w-72 rounded-full bg-violet-200/70 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-xl mx-auto text-center lg:mx-0 lg:text-left">

          {/* Availability badge */}
          <p className="mb-4 sm:mb-5 text-[11px] font-extrabold tracking-[0.1em] text-green-800">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            AVAILABLE FOR FULL-TIME ROLES &amp; FREELANCE
          </p>

          {/* Headline — who I am and what I do */}
          <h1 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl sm:leading-none lg:text-7xl">
            Full-Stack Developer
            <br />
            <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              building products that scale.
            </span>
          </h1>

          {/* Tech stack marquee */}
          <div className="mt-6 overflow-hidden rounded-full border border-slate-200 bg-white/90 px-4 py-3">
            <div className="inline-flex min-w-[200%] whitespace-nowrap items-center gap-6 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-700 animate-skill-marquee">
              <span>Frontend — CSS3 · HTML5 · JavaScript (ES6+)</span>
              <span>Next.js · React.js · Tailwind CSS · TypeScript</span>
              <span>Backend — Node.js · Express.js · REST APIs · JWT Authentication</span>
              <span>Databases — MongoDB · PostgreSQL · MySQL · Supabase</span>
              <span>Tools — Git · GitHub · VS Code · Vercel · Netlify</span>
              <span>Frontend — CSS3 · HTML5 · JavaScript (ES6+)</span>
              <span>Next.js · React.js · Tailwind CSS · TypeScript</span>
              <span>Backend — Node.js · Express.js · REST APIs · JWT Authentication</span>
              <span>Databases — MongoDB · PostgreSQL · MySQL · Supabase</span>
              <span>Tools — Git · GitHub · VS Code · Vercel · Netlify</span>
            </div>
          </div>

          {/* Subtitle — clear identity statement */}
          <p className="mt-6 sm:mt-7 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed text-slate-600 sm:text-lg">
            I&apos;m <strong className="text-slate-800">Abdul Musawir</strong> — a full-stack developer specialising in React, Next.js, and Node.js. I build fast, reliable web applications for startups, product teams, and growing businesses.
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center lg:justify-start justify-center">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 sm:py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-700"
              href="#contact"
            >
              Hire me
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 sm:py-4 text-sm font-extrabold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 shadow-sm"
              href="#projects"
            >
              View my work →
            </a>
          </div>
        </div>

        {/* Hero image card */}
        <div className="mx-auto w-full max-w-sm sm:max-w-md lg:max-w-xl overflow-hidden rounded-[24px] sm:rounded-[32px] border border-white/80 bg-white/80 shadow-2xl shadow-slate-500/10 ring-1 ring-slate-950/5 hero-card-3d">
          <div className="hero-card-inner overflow-hidden">
            <img
              src={heroImage}
              alt="Abdul Musawir — Full-Stack Developer"
              className="h-[220px] w-full object-cover sm:h-[280px] md:h-[360px] lg:h-[400px]"
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
