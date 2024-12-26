"use client";
import WorldMap from "../ui/world-map";
import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
           <>
    
      
          

    <div className="relative  dark:bg-black bg-white w-full">

    <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black ">
          Remote{" "}
          <span className="text-neutral-400 mt-4">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mt-4"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p> 
        </div>
      {/* World Map */}
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />

      {/* Mission & Vision */}
       

      <div
        className="absolute inset-0 flex items-center justify-center z-10 shadow-xl "
        style={{ pointerEvents: "none" }}
      >
        <div className="bg-white dark:bg-black bg-opacity-40 dark:bg-opacity-50 p-6 rounded-lg shadow-xl max-w-xl text-center">
           
          <h2 className="font-bold text-2xl md:text-3xl text-black dark:text-white mb-6">
            Our Mission
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-6">
            To QA the heck out of your code, design interfaces so sleek they
            cause envy, and build Flutter apps so fast your grandma’s Nokia
            would blush. We’re here to innovate, iterate, and eliminate bugs –
            one pixel at a time!
          </p>

          <h2 className="font-bold text-2xl md:text-3xl text-black dark:text-white mb-8">
            Our Vision
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            To become the ultimate tech whisperers – taming bugs, crafting UI/UX
            so intuitive it feels like mind-reading, and making sure our
            software solutions are as reliable as your mom’s Wi-Fi password
            management. Together, let’s put the ‘cosmo’ in cosmopolitan tech!
          </p>
        </div>
      </div>
    </div>
    </>
  );
  
}
