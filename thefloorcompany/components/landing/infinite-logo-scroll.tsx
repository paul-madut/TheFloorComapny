"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

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
      
    

  return (
    <div>
        <div className="h-fit py-8 flex flex-col antialiased bg-[#333333] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-4xl font-bold text-white dark:text-white">Trusted by</h1>
      
      <InfiniteMovingCards
        items={logos}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}







