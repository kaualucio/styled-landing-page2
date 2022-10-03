import { AboutUs } from "./components/AboutUs"
import { Background } from "./components/Background"
import { Blog } from "./components/Blog"
import { Differentials } from "./components/Differentials"
import Footer from "./components/Footer"
import { Header } from "./components/Header"
import { HeroSection } from "./components/HeroSection"
import { OurTeam } from "./components/OurTeam"
import { Partners } from "./components/Partners"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"


function App() {

  return (
    <>
      <Background>
        <>
          <Header />
          <HeroSection />
        </>
      </Background>
      <Partners />
      <Services />
      <Differentials />
      <OurTeam />
      <AboutUs />
      <Blog />
      <Projects />
      <Background>
        <Footer />
      </Background>
    </>
  )
}

export default App
