export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white px-5 py-16 sm:px-10 sm:py-20 lg:py-28 text-center"
    >
      <p className="mb-3 sm:mb-4 text-lg sm:text-xl font-extrabold tracking-[0.15em] uppercase text-blue-600">
        LET&apos;S CONNECT
      </p>
      <h2 className="text-3xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
        Have an idea?
        <br />
        <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Let&apos;s make it real.
        </span>
      </h2>
      <a
        className="mt-7 sm:mt-8 inline-flex items-center gap-3 rounded-xl border border-blue-600 bg-white px-5 py-3.5 sm:py-4 text-base sm:text-lg font-extrabold text-blue-600 transition hover:border-blue-700 hover:text-blue-700 break-all sm:break-normal"
        href="mailto:abdulmusawir3545@gmail.com"
      >
        abdulmusawir3545@gmail.com
      </a>
      <p className="mt-5 sm:mt-6 text-sm text-slate-500 max-w-xs sm:max-w-none mx-auto">
        Prefer to talk first? I&apos;m always happy to hear about a new challenge.
      </p>
      <p className="mt-10 sm:mt-12 text-xs text-slate-400">
        © {new Date().getFullYear()} Abdul Musawir. All rights reserved.
      </p>
    </footer>
  )
}
