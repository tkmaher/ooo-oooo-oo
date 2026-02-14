"use client";

import { DragContainer } from "@/src/draggablestuff";
import { useEffect, useState, useCallback, useRef } from "react";

const ALL_FILES = [
  { src: "/imgs/1.png" },
  { src: "/imgs/2.png" },
  { src: "/imgs/3.PNG", class: "tall-img" },
  { src: "/imgs/4.png" },
  { src: "/imgs/5.gif" },
  { src: "/imgs/6.png", class: "wide-img" },
  { src: "/imgs/7.png" },
  { src: "/imgs/8.png" },
  { src: "/imgs/9.png" },
  { src: "/imgs/10.webp" },
  { src: "/imgs/11.png" },
  { src: "/imgs/12.png" },
  { src: "/imgs/13.png" },
  { src: "/imgs/14.JPEG" },
];

const DISPLAY_COUNT = 12;
const FLIP_INTERVAL = 3000;
const FLIP_HALFWAY = 400; // ms until the card is "edge-on" and we swap the src

export default function DragCtx() {
  const [displayed, setDisplayed] = useState(ALL_FILES.slice(0, DISPLAY_COUNT));
  const [flippingIndex, setFlippingIndex] = useState<number | null>(null);
  const displayedRef = useRef(displayed);
  displayedRef.current = displayed;

  const getHiddenFiles = useCallback(() => {
    const displayedSrcs = new Set(displayedRef.current.map((f) => f.src));
    return ALL_FILES.filter((f) => !displayedSrcs.has(f.src));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const hidden = getHiddenFiles();
      if (hidden.length === 0) return;

      const randomIndex = Math.floor(Math.random() * DISPLAY_COUNT);
      const randomHidden = hidden[Math.floor(Math.random() * hidden.length)];

      // Start flip animation
      setFlippingIndex(randomIndex);

      // Swap image at the halfway point (when card is edge-on)
      setTimeout(() => {
        setDisplayed((prev) =>
          prev.map((file, i) => (i === randomIndex ? randomHidden : file))
        );
      }, FLIP_HALFWAY);

      // Clear flipping state after animation completes
      setTimeout(() => {
        setFlippingIndex(null);
      }, FLIP_HALFWAY * 2);
    }, FLIP_INTERVAL);

    return () => clearInterval(interval);
  }, [getHiddenFiles]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "100%",
        overflow: (window.innerHeight > window.innerWidth) ? "auto" : "hidden", 
        position: "relative",
      }}
    >
      <DragContainer files={displayed} flippingIndex={flippingIndex} />
      <div className="menu">
        <a  href="/provided1">View 3</a>
        </div>
        
    </div>
  );
}