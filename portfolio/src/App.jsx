
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Services from "./components/Services/Services.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Platforms from "./components/Platforms/Platforms.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration : 500,
      easing : "ease-in-sine",
    })
  },[])
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Platforms />
      <Contact />
      <Footer />
    </>
  )
}

export default App
