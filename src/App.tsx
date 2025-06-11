import './App.css'
import NavigationBar from './components/NavigationBar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Involvement from './components/Involvement'
import Publication from './components/Publication'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'
import ThemeToggle from './components/ThemeToggle'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/About'

function App() {
  return (
    <div className="app-root">
      <ParticlesBackground />
      <NavigationBar />
      <ThemeToggle />
      {/* Floating Navigation / Hamburger Menu */}
      {/* <Navigation /> */}
      {/* Theme Toggle */}
      {/* <ThemeToggle /> */}
      {/* Particle/Geometric Background (CSS/JS) */}
      <main>
        <About />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Involvement />
        <Publication />
        <Skills />
        <Contact />
        {/* Projects Section */}
        <section id="projects">[Projects Section Placeholder]</section>
        {/* Experience/Resume Section */}
        <section id="experience">[Experience Section Placeholder]</section>
        {/* Contact Section */}
        {/* <section id="contact">[Contact Section Placeholder]</section> */}
      </main>
      <ScrollToTopButton />
    </div>
  )
}

export default App
