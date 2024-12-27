"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation"; // To detect current route
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"; // To add the logo image

export const FloatingNav = ({
  navItems,
  className,
  logoSrc,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
  logoSrc: string; // Logo image source
}) => {
  const pathname = usePathname(); // Get the current route
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (pathname === "/") {
      // Show navbar only on homepage
      if (typeof current === "number") {
        let direction = current - scrollYProgress.getPrevious()!;

        if (scrollYProgress.get() < 0.05) {
          setVisible(true); // Hide when close to top
        } else {
          setVisible(direction < 0); // Show when scrolling up
        }
      }
    }
  });

  // Return nothing if not on the homepage
  if (pathname !== "/") return null;

  // Smooth scroll to the top when logo is clicked
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex w-[100%] fixed inset-x-0 mx-auto border-transparent bg-[#d6d6e0]  border-b rounded-bl-xl rounded-br-xl  z-[5000] pr-4 pl-6 py-1 items-center justify-between space-x-2",
          className
        )}
      >
        {/* Logo Section */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center mr-6">
          <Image
            src={logoSrc}
            alt="Company Logo"
            width={48}
            height={48}
            className="brightness-200"
          />
          <span className="hidden sm:block text-[#145874] text-2xl brightness-200 font-bold pl-2">Cosmotech</span>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center m-3 flex space-x-1   "
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-md  text-black px-6 py-2 rounded-full">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <button className="border text-sm font-medium relative  border-white/[0.2] text-white px-6 py-2 rounded-full">
          <span>Explore More</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
