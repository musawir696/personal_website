import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-3 left-1/2 z-50 flex h-14 sm:h-16 w-[calc(100%-1rem)] sm:w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/80 px-4 sm:px-5 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 shadow-xl shadow-slate-900/12 backdrop-blur-xl'
            : 'bg-white/80 shadow-lg shadow-slate-900/10 backdrop-blur-xl'
        } ring-1 ring-slate-950/5`}
      >
        {/* Logo */}
        <a
          className="flex items-center gap-2 sm:gap-2.5 text-sm font-extrabold tracking-tight text-slate-900 shrink-0"
          href="#home"
          onClick={closeMenu}
        >
          <b className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-lg bg-linear-to-br from-blue-600 to-violet-600 text-[10px] font-medium text-white">
            AM
          </b>
          <span className="hidden xs:inline sm:inline">Abdul Musawir</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex md:items-center md:gap-6 lg:gap-7">
          <a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#about">About</a>
          <a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
          <a className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors" href="#projects">Projects</a>
          <a
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 transition hover:scale-105 hover:bg-blue-700"
            href="#contact"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="relative flex md:hidden h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-xl p-2 transition hover:bg-slate-100"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[72px] sm:top-[76px] left-3 right-3 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="rounded-2xl border border-white bg-white/98 p-5 shadow-2xl shadow-slate-900/15 backdrop-blur-xl flex flex-col gap-1">
          <a
            className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            href="#services"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            href="#projects"
            onClick={closeMenu}
          >
            Projects
          </a>
          <div className="mt-2 pt-3 border-t border-slate-100">
            <a
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
