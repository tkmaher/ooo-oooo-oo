"use client";

import { DragContainer } from "@/src/draggablestuff";

function DragCtx() {
  const files = [
    {
      text: "a",
      class: "spacer",
    },
    {
      text: "a",
      class: "spacer",
    },
    {
      text: "a",
      class: "spacer",
    },
    {
      text: "a",
      class: "spacer",
    },
    {
      text: "a",
      class: "spacer",
    },
    {
      text: "Screening at Blip — Chicago 2026-02-06",
      src: "/shows/2.png"
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
        overflow: "hidden", // important to prevent page expansion
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
    ["Back", "/"],
  ]
  

  return (
    <>
      <DragCtx/>
      <div className="menu">
        {links.map(([title, link], index) => (
            <p key={index}>
              <a href={link}>{title}</a>
            </p>
          ))}
      </div>
    </>
  );
}
