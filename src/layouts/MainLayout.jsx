
import { Outlet } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container-page min-h-[65vh] py-12 sm:py-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
