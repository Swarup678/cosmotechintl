"use client";

import HeroSection from "./components/herosection/HeroSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import AboutUs from "./components/AboutUs/AboutUs";
import { VoiceOFSuccess } from "./components/voiceofsucess/voiceofsuccess";
import Contact from "./components/ContactUs/Contact";
import { WorldMapDemo } from "./components/worldmap/worldmap";
import { Footer } from "./components/footer/footer";
import BackToTop from "./components/BackToTop/BackToTop";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection/>
      <FeaturesSection/>
      <WorldMapDemo/>
      <AboutUs/>
      <VoiceOFSuccess/>
      <Contact/>
      <Footer/>
    </div>
  );
}
