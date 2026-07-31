import About from './components/About'

import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'
import Skills from './components/Skills'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
     
      <Services />
      <Projects />
      <Footer />
    </main>
  )
}
