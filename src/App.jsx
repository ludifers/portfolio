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
    <div className="terminal-scrollbar h-screen overflow-y-auto snap-y snap-proximity scroll-smooth md:snap-mandatory">
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects preview />
    </div>
  )
}

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        })
      })
      return
    }

    window.scrollTo(0, 0)
  }, [hash, pathname])

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
