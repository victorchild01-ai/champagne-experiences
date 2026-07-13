import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToHash from "./components/ScrollToHash"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyUs from "./components/WhyUs"
import DiscoverChampagne from "./components/DiscoverChampagne"
import Experiences from "./components/Experiences"

import PrivateTours from "./pages/PrivateTours"
import ChampagneHouses from "./pages/ChampagneHouses"
import Gastronomy from "./pages/Gastronomy"
import Transportation from "./pages/Transportation"
import RomanticEscapes from "./pages/RomanticEscapes"
import FamilyExperiences from "./pages/FamilyExperiences"

import Contact from "./pages/Contact"


function Home() {
  return (
    <div>

      <Navbar />

      <Hero />

      <WhyUs />

      <DiscoverChampagne />

      <Experiences />

    </div>
  )
}


function App() {

  return (

    <BrowserRouter>

    <ScrollToHash />

      <Routes>

  <Route 
    path="/" 
    element={<Home />} 
  />

  <Route 
    path="/experiences/private-tours" 
    element={<PrivateTours />} 
  />

  <Route 
    path="/experiences/champagne-houses" 
    element={<ChampagneHouses />} 
  />

  <Route 
    path="/experiences/gastronomy" 
    element={<Gastronomy />} 
  />

  <Route 
    path="/experiences/transportation" 
    element={<Transportation />} 
  />

  <Route 
    path="/experiences/romantic-escapes" 
    element={<RomanticEscapes />} 
  />

  <Route 
    path="/experiences/family-experiences" 
    element={<FamilyExperiences />} 
  />

  <Route 
  path="/contact" 
  element={<Contact />} 
/>

</Routes>

    </BrowserRouter>

  )

}


export default App