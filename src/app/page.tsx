"use client";

import HeroSection from "./components/herosection/HeroSection";
import FeaturesSection from "./components/FeatureSection/FeatureSection";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection/>
      <FeaturesSection/>
    </div>
  );
}
