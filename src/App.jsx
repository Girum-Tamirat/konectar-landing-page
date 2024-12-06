import React from 'react'
import './index.css'
import './App.css'
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutUsSection from './components/AboutUsSection.jsx'
import VisionSection from './components/VisionSection.jsx'
import MissionSection from './components/MissionSection.jsx'
import ProductsFeatures from './components/ProductsFeature.jsx'
import SDGMission from './components/SDGMission.jsx'
import OurPartners from './components/OurPartners.jsx'
import Offers from './components/Offers.jsx'
import GoldenPath from './components/GoldenPath.jsx'
import Blogs from './components/Blogs.jsx'
import FAQSection from './components/FAQSection.jsx'
import TeamSection from './components/TeamSection.jsx'
import BackToTopButton from './components/BackToTop.jsx'
import NewsSubscription from './components/NewsSubscrioption.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutUsSection/>
      <VisionSection/>
      <MissionSection/>
      <ProductsFeatures/>
      <SDGMission/>
      <OurPartners/>
      <Offers/>
      <GoldenPath/>
      <Blogs/>
      <FAQSection/>
      <TeamSection/>
      <BackToTopButton/>
      <NewsSubscription/>
      <Footer/>
    </div>
  )
}

export default App
