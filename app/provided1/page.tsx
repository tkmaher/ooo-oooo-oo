"use client";
import { useState } from "react";

import { DragContainer } from "@/src/draggablestuff";

function DragCtx() {
  const files = [
    {
      text: " ",
      class: "spacer",
    },
    {
      text: " ",
      class: "spacer",
    },
    {
      text: " ",
      class: "spacer",
    },
    {
      text: " ",
      class: "spacer",
    },
    {
      text: " ",
      class: "spacer",
    },
    {
      text: "Screening at Blip — Chicago 2026-02-06",
      src: "/shows/2.png",
      href: "https://www.youtube.com/watch?v=FQTc_Ppz8A4&si=9YC6Ofhi17FDins_"
    },
    {
      text: "Performance at Blip — Chicago 2025-12-12",
      src: "/shows/1.JPG"
    },
  ]

  return (
    
    <div
    
      style={{
        top: 0,
        width: "100%",
        height: "100vh",
        maxHeight: "100%",
        overflowX: "hidden", // important to prevent page expansion
        position: "relative",
      }}
    >
       
        <DragContainer files={files}/>
    </div>
  );
}

export default function Home() {

  const links = [
    ["Album", "/"],
    ["CDs", "/merchandise"],
    ["Info", "/lyrics"],
    ["Contact", "mailto:dust54089@gmail.com"],
    ["Back", "/"],
  ]

  const [open, setOpen] = useState(false);
  

  return (
    <>
      <DragCtx/>
      <div className="menu">
        
        <a onClick={() => setOpen(open => !open)}>Album</a>
        <div hidden={!open} style={{pointerEvents: "auto"}}>
          bandcamp goes here
        </div>

        <a href="/merchandise">Merchandise</a>
        <a href="/lyrics">Info</a>
        <a href="mailto:dust54089@gmail.com">Contact</a>
        <br/>
        <a href="/">Back</a>

      </div>
    </>
  );
}
