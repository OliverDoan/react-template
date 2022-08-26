import './index.css'
// import components
import About from './components/About'
import BackTopBtn from './components/BackTopBtn'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div className='bg-white relative'>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <BackTopBtn />
    </div>
  )
}

export default App
