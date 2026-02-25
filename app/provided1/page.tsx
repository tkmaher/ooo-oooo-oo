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
          <iframe style={{border: 0, width: "400px", height: "737px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2774788724/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=2091903469,361906268/esig=c773ee85d69314ca94dccfafc8a355e1/" seamless><a href="https://view3.bandcamp.com/album/paper">Paper by View 3</a></iframe>
        </div>

        <a href="https://view3.bandcamp.com/merch" target="_blank">Merchandise</a>
        <a href="/lyrics">Info</a>
        <a href="mailto:dust54089@gmail.com">Contact</a>
        <br/>
        <a href="/">Back</a>

      </div>
    </>
  );
}
