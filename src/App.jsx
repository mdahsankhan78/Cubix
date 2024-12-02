import Awards from "./components/Awards"
import Clients from "./components/Clients"
import Header from "./components/Header"
import SliderHero from "./components/Hero/Carousel"
import Carousel from "./components/Hero/Carousel"
import Hero from "./components/Hero/Hero"
import Industries from "./components/Industries"
import Journey from "./components/Journey"
import Products from "./components/Products"
import Stories from "./components/Stories"
import Technologies from "./components/Technologies"

function App() {

  return (
    <>
      <Header />
      <div className="relative md:-top-24 inset-0 z-0 h-screen">
        <Hero />
        <SliderHero/>
      </div>
      <Stories/>
      <Journey/>
      <Products/>
      <Technologies/>
      <Clients/>
      <Industries/>
      <Awards/>
      
    </>
  )
}

export default App
