"use client";

import HeroSection from "./components/herosection/HeroSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import { VoiceOFSuccess } from "./components/voiceofsucess/voiceofsuccess";
import Contact from "./components/ContactUs/Contact";
import AboutUs from "./components/AboutUs/AboutUs";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection/>
      <FeaturesSection/>
      <AboutUs />
      <VoiceOFSuccess />
      <Contact />
    </div>
  );
}
