import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./assets/components/Navbar";
import HeroComponent from "./assets/components/HeroComponent";
import TitleComponent from "./assets/components/TitleComponent";
import Footer from "./assets/components/Footer";
import StartOrganising from "./assets/components/StartOrganising";
import FeaturesSection from "./assets/components/FeaturesSection";
import Testimonials from "./assets/components/Testemonials";


import './App.css';

function App() {
  
  return (
    <>
    <Navbar/>
    <HeroComponent/>
    <TitleComponent/>
    <FeaturesSection/>
    <Testimonials/>
    <StartOrganising/>
    <Footer/>
    
     
    </>
  )
}

export default App
