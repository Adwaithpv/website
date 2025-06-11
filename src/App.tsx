import './App.css'
import NavigationBar from './components/NavigationBar'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Involvement from './components/Involvement'
import Publication from './components/Publication'
import Contact from './components/Contact'
import ScrollToTopButton from './components/ScrollToTopButton'
import ThemeToggle from './components/ThemeToggle'
import ParticlesBackground from './components/ParticlesBackground'
import About from './components/About'
import AboutMeDetails from './components/AboutMeDetails'
import Showcase from './components/Showcase'

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
        <AboutMeDetails />
        <Showcase />
        <Experience />
        <Education />
        <Certifications />
        <Involvement />
        <Publication />
        <Contact />
        {/* Projects Section */}
        {/* Experience/Resume Section */}
        {/* Contact Section */}
        {/* <section id="contact">[Contact Section Placeholder]</section> */}
      </main>
      <ScrollToTopButton />
    </div>
  )
}

export default App
