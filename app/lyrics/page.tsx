"use client";

import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { DraggableBox } from "@/src/draggablestuff"

export default function DragCtx() {
  

  return (
    
    <div
      style={{
        width: "100%",
        overflow: "hidden", // important to prevent page expansion
        position: "relative",
        padding: "15em",
        textAlign: "center"
      }}
    >
      <div style={{fontFamily: "Helvetica"}}>
        The sound of wings<br/>
        The sound of invisible paper on the forest floor in September 1945, in Austria<br/>
        <br/>
        And the sound of shining hands<br/>
        <br/>
        The sound of upside-down frescoes<br/>
        And the sound of invisible upside-down hands, turning<br/>
        The sound of nothing<br/>
        And the sound of, <a target="_blank" href="https://youtube.com/shorts/MoZvuZLBmt8?si=B479tCQJ9fKEIkuh" >Ummm</a><br/>
      </div>
    </div>
  );
}
