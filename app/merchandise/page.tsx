"use client";

import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { DraggableBox } from "@/src/draggablestuff"

export default function DragCtx() {
  

  return (
    
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden", // important to prevent page expansion
        position: "relative",
      }}
    >
      <img style={{left: "50%", top: "50%", position: "absolute", transform: "translate(-50%, -50%)"}} src="/imgs/wood.webp"/>
    </div>
  );
}
