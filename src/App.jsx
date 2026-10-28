
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}
