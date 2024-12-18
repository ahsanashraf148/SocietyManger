import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Footer from '../components/Footer'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Login />
      <Footer />
    </div>
  )
}

