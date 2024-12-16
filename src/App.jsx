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
import Blogs from "./components/Blogs"
import Modal from "./components/ui/Modal"
import 'aos/dist/aos.css';
import Aos from "aos"
import { useEffect } from "react"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    Aos.init({easing: 'ease-in-out' });
  }, []);

  return (
    <>
      <Modal/>
      <Header />
      <div className="relative md:-top-24 inset-0 z-0 h-screen">
        <Hero />
        <SliderHero />
      </div>
      <Stories />
      <Journey />
      <Products />
      <Technologies />
      <Clients />
      <Industries />
      <Awards />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
