import { useState } from 'react'
import './App.css'

const services = [
  { number: '01', icon: '⌘', title: 'Full-stack development', text: 'End-to-end web applications that are fast, reliable, and built around your business goals.', tags: ['React', 'Node.js', 'APIs'] },
  { number: '02', icon: '↗', title: 'Product websites', text: 'Clear, high-converting websites that make your product feel credible from the first click.', tags: ['UI/UX', 'Responsive', 'SEO-ready'] },
  { number: '03', icon: '✦', title: 'Dedicated team', text: 'The right specialists join the project when needed—so every challenge gets its best solution.', tags: ['Design', 'Mobile', 'Cloud'] },
]

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <main>
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home"><b>AM</b><span>Abdul Musawir</span></a>
      <button className="menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="nav-links"><i></i><i></i><span className="sr-only">Toggle menu</span></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Services</a><a href="#projects" onClick={closeMenu}>Projects</a>
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk <Arrow /></a>
      </div>
    </nav>

    <section id="home" className="hero">
      <div className="hero-copy">
        <p className="kicker"><span className="dot"></span> AVAILABLE FOR SELECT PROJECTS</p>
        <h1>Digital products<br />built <em>to matter.</em></h1>
        <p className="intro">I&apos;m Abdul Musawir, a full-stack developer creating thoughtful web experiences and scalable software with a team of trusted specialists.</p>
        <div className="hero-actions"><a className="button" href="#contact">Start a project <Arrow /></a><a className="text-link" href="#services">Explore services <span>↓</span></a></div>
      </div>
      <div className="art" aria-label="Abstract technology illustration">
        <div className="glow one"></div><div className="glow two"></div><div className="grid"></div>
        <div className="orbit first"><i></i></div><div className="orbit second"><i></i></div>
        <div className="monogram">AM</div><div className="code top"><b>const</b> impact = true;</div><div className="code bottom">&lt;/build&gt;</div>
        <p>CRAFTING THE<br />WEB SINCE 2021</p>
      </div>
      <div className="hero-bottom"><span>Scroll to discover &nbsp;<b>↓</b></span><span>FULL-STACK DEVELOPER <b>/</b> PAKISTAN</span></div>
    </section>

    <section id="about" className="about section">
      <p className="kicker">01 — ABOUT</p>
      <div className="about-grid"><h2>More than code.<br /><em>A partner in progress.</em></h2><div><p>I turn ideas into polished digital products. From the first strategy session to the last deployment, I work closely with clients to create solutions people enjoy using.</p><p>When a project calls for more, I bring in my network of designers, developers, and specialists—giving you one focused team and a stronger final product.</p><a className="under-link" href="#contact">Get to know my process <Arrow /></a></div></div>
      <div className="stats"><div><strong>Full-stack</strong><span>From interface to infrastructure</span></div><div><strong>Collaborative</strong><span>Focused expertise, when needed</span></div><div><strong>Human-first</strong><span>Technology made simple</span></div></div>
    </section>

    <section id="services" className="services section">
      <header><div><p className="kicker">02 — SERVICES</p><h2>What I can <em>build for you.</em></h2></div><p>I combine strategy, design thinking, and engineering to take your idea from concept to launch.</p></header>
      <div className="cards">{services.map((service) => <article className="card" key={service.number}><div className="card-top"><span>{service.number}</span><b>{service.icon}</b></div><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="#contact">Let&apos;s build it <Arrow /></a></article>)}</div>
    </section>

    <section id="projects" className="projects section"><p className="kicker">03 — SELECTED WORK</p><div><span className="project-mark"></span><h2>Projects are<br /><em>coming soon.</em></h2><p>I&apos;ll add case studies, GitHub repositories, and live project links here soon.</p></div></section>
    <section id="contact" className="contact"><p className="kicker">04 — LET&apos;S CONNECT</p><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><a href="mailto:hello@abdulmusawir.dev">hello@abdulmusawir.dev <Arrow /></a><p>Prefer to talk first? I&apos;m always happy to hear about a new challenge.</p></section>
  </main>
}
