"use client";

import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState, useRef } from "react";
import { DndContext } from "@dnd-kit/core";

export function DraggableBox(props: {
  x: number; y: number; id: number; text?: string; src?: string; class?: string; href?: string;
  flipping?: boolean; zIndex: number;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: props.id });
  const hasDragged = useRef(false);

  const translate = {
    x: props.x + (transform?.x ?? 0),
    y: props.y + (transform?.y ?? 0),
  };

  const wrapperStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    height: window.innerHeight / 3,
    width: window.innerHeight > window.innerWidth ? window.innerWidth : window.innerWidth / 4,
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    cursor: "grab",
    perspective: "800px",
    zIndex: props.zIndex,
  };

  const containerClass = `${props.class ?? "moving-elt"} elt-container ${props.flipping ? "flip-animation" : ""}`;

  return (
    <div
      className={`elt-wrapper ${props.class}`}
      style={wrapperStyle}
      onMouseDown={() => { hasDragged.current = false; }}
      onMouseMove={() => { hasDragged.current = true; }}
      onMouseUp={() => { if (!hasDragged.current && props.href) window.open(props.href); }}
    >
      {props.text ? (
        <div
          className={`${containerClass} elt-text`}
          ref={setNodeRef}
          style={{ userSelect: "none" }}
          {...listeners}
          {...attributes}
          id={props.id.toString()}
        >
          {props.text}
          <img src={props.src} />
        </div>
      ) : (
        <img
          className={containerClass}
          ref={setNodeRef}
          style={{ userSelect: "none" }}
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
  files: { text?: string; src?: string; class?: string; href?: string }[];
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
    setCoords(props.files.map((_, i) =>
      window.innerHeight > window.innerWidth
        ? [0, h / 3 * i]
        : [w / 4 * (i % 4), h / 3 * Math.floor(i / 4)]
    ));
    setZIndices(props.files.map(() => 0));
  }, []);

  function handleDragStart(event: any) {
    const id = event.active.id;
    setActiveItemId(id);
    zCounter.current += 1;
    setZIndices((prev) => prev.map((z, i) => (i === id ? zCounter.current : z)));
    document.getElementById(id.toString())?.classList.add("unblurred");
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
    document.getElementById(activeItemId.toString())?.classList.remove("unblurred");
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
          href={props.files[i].href}
          flipping={props.flippingIndex === i}
          zIndex={zIndices[i] ?? 0}
        />
      ))}
    </DndContext>
  );
}