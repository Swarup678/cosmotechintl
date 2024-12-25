"use client";

import HeroSection from "./components/herosection/HeroSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";
import { VoiceOFSuccess } from "./components/voiceofsucess/voiceofsuccess";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <VoiceOFSuccess />
    </div>
  );
}
