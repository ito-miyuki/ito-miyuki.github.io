import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        <p>© 2024 Miyuki Ito. All rights reserved.</p>
      </footer>
    </div>
  )
}


export default App
