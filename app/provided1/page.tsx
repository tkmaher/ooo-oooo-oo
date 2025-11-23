"use client";

import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { DragContainer } from "@/src/draggablestuff"

export default function DragCtx() {
  const files = [
    {
      type: "text",
      src: "virtue",
      class: "rotator-rev",
    },
    {
      type: "text",
      src: "morality",
      class: "rotator",
    },
  ]

  return (
    
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "100%",
        overflow: "hidden", // important to prevent page expansion
        position: "relative",
        padding: "10em"
      }}
    >
       
        <a href="/">.</a><a href="/merchandise">.</a>
        <DragContainer files={files}/>
    </div>
  );
}
