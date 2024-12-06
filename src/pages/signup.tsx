import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Signup />
      <Footer />
    </div>
  )
}

