import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
// import Events from '../components/Events'
import JoinUs from '../components/JoinUs'
import Footer from '../components/Footer'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Features />
      {/* <Events /> */}
      <JoinUs />
      <Footer />
    </div>
  )
}

