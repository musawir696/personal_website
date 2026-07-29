import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-3 left-1/2 z-50 flex h-16 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-white/80 bg-white/80 px-5 shadow-lg shadow-slate-900/10 ring-1 ring-slate-950/5 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <a
        className="flex items-center gap-2.5 text-sm font-extrabold tracking-tight text-slate-900"
        href="#home"
        onClick={closeMenu}
      >
        <b className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-blue-600 to-violet-600 text-[10px] font-medium text-white">
          AM
        </b>
        <span>
          Abdul Musawir
        </span>
      </a>

      <button
        className="grid gap-1.5 p-2 md:hidden"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        <i className="block h-0.5 w-5 bg-slate-700">
        </i>
        <i className="block h-0.5 w-5 bg-slate-700">
        </i>
        <span className="sr-only">
          Toggle menu
        </span>
      </button>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } absolute top-[72px] right-0 left-0 flex-col gap-4 rounded-2xl border border-white bg-white/95 p-5 shadow-xl shadow-slate-900/10 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        id="nav-links"
      >
        <a
          className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>
        <a
          className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          href="#services"
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          href="#projects"
          onClick={closeMenu}
        >
          Projects
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-xl border border-blue-600 bg-white px-4 py-3 text-sm font-extrabold text-blue-600 transition hover:border-blue-700 hover:text-blue-700"
          href="#contact"
          onClick={closeMenu}
        >
          Let&apos;s talk
        </a>
      </div>
    </nav>
  )
}
