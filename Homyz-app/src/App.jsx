import Header from "./componenrts/Header/Header"
import Hero from "./componenrts/Hero/Hero"
import './App.css'
import Companies from "./componenrts/companies/Companies"
import Residencies from "./componenrts/Residencies/Residencies"
import Value from "./componenrts/Value/Value"
import Contact from "./componenrts/Contact/Contact"
import GetStarted from "./componenrts/GetStarted/GetStarted"
import Footer from "./componenrts/Footer/Footer"

const App = () => {
  return (
    <div className="App">

      <div>
        <div className="white-gradient"></div>
          <Header />
          <Hero />
      </div>

      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
      

    </div>
  )
}

export default App