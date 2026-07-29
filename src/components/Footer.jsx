export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white px-6 py-20 text-center sm:px-10 lg:py-28"
    >
      <p className="mb-4 text-xl font-extrabold tracking-[0.15em] uppercase text-blue-600 sm:text-2xl">
        LET&apos;S CONNECT
      </p>
      <h2 className="text-4xl leading-none font-extrabold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
        Have an idea?
        <br />
        <span className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          Let&apos;s make it real.
        </span>
      </h2>
      <a
        className="mt-8 inline-flex items-center gap-3 rounded-xl border border-blue-600 bg-white px-5 py-4 text-lg font-extrabold text-blue-600 transition hover:border-blue-700 hover:text-blue-700"
        href="mailto:hello@abdulmusawir.dev"
      >
        abdulmusawir3545@gmail.com
      </a>
      <p className="mt-6 text-sm text-slate-500">
        Prefer to talk first? I&apos;m always happy to hear about a new challenge.
      </p>
    </footer>
  )
}
