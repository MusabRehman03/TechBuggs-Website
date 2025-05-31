import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import OurServices from './components/OurServices'
import './App.css'
import Testimonials from './components/Testimonials'
// import CaseStudies from './components/CaseStudies'
import TrustUs from './components/TrustUs'
// import Timeline from './components/TimeLine'

function App() {


  return (
    <div className=''>
      <NavBar />
      <HeroSection />
      <OurServices /> 
      <TrustUs/>
      <Testimonials />
      {/* <CaseStudies /> */}
      {/* <Timeline /> */}
      {/* <Testimonials /> */}



    </div>
  )
}

export default App
