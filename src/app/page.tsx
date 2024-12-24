import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/navbar";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400']
});

export default function Home() {
  return (
    <div className={inter.className}>
      <Navbar />
      <HeroSection/>
    </div>
  );
}
