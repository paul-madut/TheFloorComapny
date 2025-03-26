"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import LogoScroller from "./animation";

export default function Logos() {

    const logos = [
        { name: "airbnb", link: "./icons/scroll_logos/airbnb.svg" },
        { name: "apple", link: "./icons/scroll_logos/apple.svg" },
        { name: "facebook", link: "./icons/scroll_logos/facebook.svg" },
        { name: "google", link: "./icons/scroll_logos/google.svg" },
        { name: "mcdonalds", link: "./icons/scroll_logos/mcdonalds.svg" },
        { name: "twitter", link: "./icons/scroll_logos/twitter.svg" },
        { name: "you", link: "./icons/scroll_logos/you.svg" },
        { name: "instagram", link: "./icons/scroll_logos/instagram.svg" }
      ];

      const logo = [
        { alt: "airbnb", scr: "/icons/scroll_logos/airbnb.svg" },
        { alt: "apple", src: "/icons/scroll_logos/apple.svg" },
        { alt: "facebook", link: "/icons/scroll_logos/facebook.svg" },
        { alt: "google", src: "/icons/scroll_logos/google.svg" },
        { alt: "mcdonalds", src: "/icons/scroll_logos/mcdonalds.svg" },
        { alt: "twitter", src: "/icons/scroll_logos/twitter.svg" },
        { alt: "you", src: "/icons/scroll_logos/you.svg" },
        { alt: "instagram", src: "/icons/scroll_logos/instagram.svg" }
      ];
      
    

  return (
    <div className="w-screen">
      <div className="header w-full flex justify-center h-fit items-center">
      <h1 className="text-2xl font-bold z-40 text-white dark:text-white text-center">Trusted by</h1>

      </div>
        <div className="h-fit py-2 flex flex-col antialiased bg-[#333333]/70 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
      <LogoScroller logos={logo} />
    </div>
    </div>
  );
}







