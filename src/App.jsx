import './App.css'
import Navbar from './component/NavBar/Navbar'
import About from './sections/About/About'
import Customers from './sections/Customers/Customers'
import Footer from './sections/Footer/Footer'
import Hero from './sections/Hero/Hero'
import OurTeam from './sections/OurTeam/OurTeam'
import Projects from './sections/Projects/Projects'
import Table from './sections/Table/Table'

function App() {
  return (
    <div className='content'>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <OurTeam id="team" />
      <Customers id="customers" />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  )
}

export default App
