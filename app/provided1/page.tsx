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
      text: "Paper release party — 2026-06-03",
      src: "/shows/3.png"
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
      text: "Screening at Blip - 2026-06-02",
      src: "/shows/2.png",
      href: "https://www.youtube.com/watch?v=FQTc_Ppz8A4&si=9YC6Ofhi17FDins_"
    },
    {
      text: "Performance at Blip — 2025-12-12",
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

  const [albumOpen, setAlbumOpen] = useState(false);
  const [movieOpen, setMovieOpen] = useState(false);

  

  return (
    <>
      <DragCtx/>
      <div className="menu">
        
        <a onClick={() => setAlbumOpen(open => !open)}>Album</a>
        <div hidden={!albumOpen} style={{pointerEvents: "auto"}} className="bandcamp-container">
          {albumOpen && (
            <iframe style={{border: 0, width: "400px", height: "737px"}} src="https://bandcamp.com/EmbeddedPlayer/album=2774788724/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=2091903469,361906268/esig=c773ee85d69314ca94dccfafc8a355e1/" seamless><a href="https://view3.bandcamp.com/album/paper">Paper by View 3</a></iframe>
          )}
          <a href="https://view3.bandcamp.com/album/paper" target="_blank">Bandcamp</a>
          <br/>
          <a href="https://www.ninaprotocol.com/hubs/view3" target="_blank">Nina</a>
        </div>

        <a href="https://view3.bandcamp.com/merch" target="_blank">Merchandise</a>
        <a href="/lyrics">Info</a>
        <a href="mailto:dust54089@gmail.com">Contact</a>
        <a onClick={() => setMovieOpen(open => !open)}>Movie</a>
        <div hidden={!movieOpen} style={{pointerEvents: "auto"}} className="bandcamp-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FQTc_Ppz8A4?si=dRiiDmMccnwaazWp&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <br/>
        <a href="/">Back</a>

      </div>
    </>
  );
}
