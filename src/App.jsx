import {Routes,Route, useLocation}from "react-router-dom"
import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"

function Homepage() {
  return (
    <div className="terminal-scrollbar h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects preview />
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App()
{
  return (
    <>
    <ScrollToTop />
    <Navbar />
    
    
    
    
        <Routes>
      <Route path="/" element={<Homepage />}></Route>
      
      <Route path="/projects" element={<Projects />}></Route>
 
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>    
    </>
  )
}
export default App
