import About from "./components/About"
import AsideBar from "./components/AsideBar"
import Contact from "./components/Contact"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Skills from "./components/SkillsContainer"
import Works from "./components/WorksContainer"

function App() {

  return (
    <div>
      <NavBar/>
      <AsideBar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
