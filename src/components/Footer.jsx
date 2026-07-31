export default function Footer() {
  const contactLinks = [
    {
      label: 'abdulmusawir3545@gmail.com',
      href: 'mailto:abdulmusawir3545@gmail.com',
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: 'github.com/musawir696',
      href: 'https://github.com/musawir696',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      ),
    },
    {
      label: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/your-linkedin-handle',   // ← UPDATE THIS
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ]

  return (
    <footer
      id="contact"
      className="bg-slate-950 px-5 py-16 sm:px-10 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">

        {/* Label */}
        <p className="mb-3 sm:mb-4 text-lg sm:text-xl font-extrabold tracking-[0.15em] uppercase text-blue-400">
          GET IN TOUCH
        </p>

        {/* Headline */}
        <h2 className="text-3xl leading-tight font-extrabold tracking-tighter text-white sm:text-5xl lg:text-6xl">
          Ready to build
          <br />
          <span className="bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            something great?
          </span>
        </h2>

        {/* Subline */}
        <p className="mt-5 sm:mt-6 text-base leading-relaxed text-slate-400 max-w-lg mx-auto">
          I&apos;m open to <strong className="text-slate-200">full-time software engineering roles</strong> and <strong className="text-slate-200">freelance contracts</strong>. Based in Pakistan — available remotely, worldwide.
        </p>

        {/* Primary CTA */}
        <a
          className="mt-8 sm:mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-500/25 transition hover:scale-105 hover:bg-blue-500"
          href="mailto:abdulmusawir3545@gmail.com"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          Send me an email
        </a>

        {/* Secondary links */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {contactLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              {icon}
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 sm:mt-16 border-t border-slate-800 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Abdul Musawir. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Available for remote work worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
