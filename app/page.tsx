"use client";

import { useState, useEffect } from "react";
import { DragContainer } from "@/src/draggablestuff"

export default function DragCtx() {
  const files = [
    {
      type: "img",
      src: "/imgs/1.png"
    },
    {
      type: "img",
      src: "/imgs/2.png"
    },
    {
      type: "img",
      src: "/imgs/3.PNG",
      class: "tall-img"
    },
    {
      type: "img",
      src: "/imgs/4.png",
      class: "faller"
    },
    {
      type: "img",
      src: "/imgs/5.gif"
    },
    {
      type: "img",
      src: "/imgs/6.png",
      class: "wide-img"
    },
    {
      type: "img",
      src: "/imgs/7.PNG"
    },
    {
      type: "img",
      src: "/imgs/8.png",
    },
    {
      type: "text",
      src: "oooooo-oooo-o-o----oo--oo-o--oooooo-o---oo--ooo--ooooooo-oooo-o-o----oo--oo-o--oooooo-o---oo--ooo--ooooooo-oooo-o-o----oo--oo-o--oooooo-o---oo--ooo--ooooooo-oooo-o-o----oo--oo-o--oooooo-o---oo--ooo--o"
    },
    {
      type: "text",
      src: "modesviews",
      class: "wide-img"
    },
    {
      type: "text",
      src: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    },
    {
      type: "text",
      src: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    },
    {
      type: "text",
      src: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
      class: "sideways"
    },
  ];

  return (
    
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "100%",
        overflow: "hidden", // important to prevent page expansion
        position: "relative",
      }}
    >
      <a style={{fontSize: "5em", float: "right", margin: "1em"}} href="/provided1">
      👀
      </a>
      <DragContainer files={files}/>
      
    </div>
  );
}
