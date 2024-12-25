"use client";

import HeroSection from "./components/herosection/HeroSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import { VoiceOFSuccess } from "./components/voiceofsucess/voiceofsuccess";
import Contact from "./components/ContactUs/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <VoiceOFSuccess />
      <Contact/>
    </div>
  );
}
