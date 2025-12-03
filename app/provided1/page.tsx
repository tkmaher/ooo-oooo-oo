"use client";

import { DragContainer } from "@/src/draggablestuff";

function DragCtx() {
  const files = [
    {
      type: "text",
      src: "Performance at Blip --- Chicago 2025-12-12",
      class: "rotator-rev",
    },
    {
      type: "text",
      src: "Performance at Blip --- Chicago 2025-12-12",
      class: "rotator",
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
        padding: "10em",
        position: "absolute",
      }}
    >
       
        <DragContainer files={files}/>
    </div>
  );
}

export default function Home() {

  const links = [
    ["Home", "/"],
    ["Album", "/"],
    ["CDs", "/merchandise"],
    ["Info", "/lyrics"],
  ]
  

  return (
    <>
      <DragCtx/>
      <div
        style={{
          width: "75%",
          position: "relative",
          marginTop: "5em",
          marginLeft: "5em",
          
        }}
      >
        
        <br/><br/>
        <img style={{maxWidth: "200px"}} src="https://www.shutterstock.com/image-vector/chinese-dragon-sketch-handdrawn-vector-600w-2558763545.jpg"/>
        {links.map(([title, link], index) => (
            <p key={index}>
              <a href={link}>{title}</a>
            </p>
          ))}
      </div>
    </>
  );
}
