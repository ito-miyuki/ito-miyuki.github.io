import React from "react"
import Header from "./components/Header"
import About from "./components/About"

const App: React.FC = () => {
  return (
    <div className="App">
      {<Header />}
      <main>
        <About />
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
    </div>
  )
}


export default App
