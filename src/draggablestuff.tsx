"use client";

import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState, useRef } from "react";
import { DndContext } from "@dnd-kit/core";

export function DraggableBox(props: {
  x: number; y: number; id: number; text?: string; src?: string; class?: string;
  flipping?: boolean; zIndex: number;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: props.id });

  const translate = {
    x: props.x + (transform?.x ?? 0),
    y: props.y + (transform?.y ?? 0),
  };

  const wrapperStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    height: window.innerHeight / 3,
    width: (window.innerHeight > window.innerWidth ? window.innerWidth : window.innerWidth / 4),
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    cursor: "grab",
    perspective: "800px",
    zIndex: props.zIndex,
  };
  console.log("src:",props.src);

  return (
    <div className={`elt-wrapper ${props.class}`} style={wrapperStyle}>
      {props.text ? 
        <div
          className={`${props.class ?? "moving-elt"} elt-container elt-text ${props.flipping ? "flip-animation" : ""}`}
          ref={setNodeRef}
          style={{ filter: "blur(15px)", userSelect: "none" }}
          {...listeners}
          {...attributes}
          id={props.id.toString()}
        >
          {props.text}
          <img src={props.src}/>
        </div>
       : (
        <img
          className={`${props.class ?? "moving-elt"} elt-container ${props.flipping ? "flip-animation" : ""}`}
          ref={setNodeRef}
          style={{ filter: "blur(1px)", userSelect: "none" }}
          {...listeners}
          {...attributes}
          id={props.id.toString()}
          src={props.src}
        />
      )}
    </div>
  );
}

export function DragContainer(props: {
  files: { text?: string; src?: string; class?: string }[];
  flippingIndex?: number | null;
}) {
  const [coords, setCoords] = useState<[number, number][]>([]);
  const [zIndices, setZIndices] = useState<number[]>([]);
  const [tempDraggedPos, setTempDraggedPos] = useState({ x: 0, y: 0 });
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const initialized = useRef(false);
  const zCounter = useRef(1);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (window.innerHeight > window.innerWidth) {
      setCoords(props.files.map((_, i) => [0, h / 3 * i]));
    } else {
      setCoords(props.files.map((_, i) => [w / 4 * (i % 4), h / 3 * Math.floor(i / 4)]));
    }
    setZIndices(props.files.map(() => 0));
  }, []);

  function handleDragStart(event: any) {
    const id = event.active.id;
    setActiveItemId(id);
    zCounter.current += 1;
    setZIndices((prev) => prev.map((z, i) => (i === id ? zCounter.current : z)));
    document.getElementById(id.toString())?.style.setProperty("filter", "blur(0px)");
  }

  function handleDragMove(event: any) {
    if (activeItemId === null) return;
    document.body.classList.add("drag-active");
    setTempDraggedPos({
      x: coords[activeItemId][0] + (event.delta?.x ?? 0),
      y: coords[activeItemId][1] + (event.delta?.y ?? 0),
    });
    setDragging(true);
  }

  function handleDragEnd() {
    if (activeItemId === null || !dragging) return;
    setCoords((prev) =>
      prev.map((coord, i) => (i === activeItemId ? [tempDraggedPos.x, tempDraggedPos.y] : coord))
    );
    setActiveItemId(null);
    document.body.classList.remove("drag-active");
    setDragging(false);
  }

  if (coords.length === 0) return null;

  return (
    <DndContext onDragStart={handleDragStart} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
      {coords.map((item, i) => (
        <DraggableBox 
          key={i} 
          x={item[0]} 
          y={item[1]} 
          id={i} 
          src={props.files[i].src}
          text={props.files[i].text} 
          class={props.files[i].class}
          flipping={props.flippingIndex === i}
          zIndex={zIndices[i] ?? 0} 
        />
      ))}
    </DndContext>
  );
}