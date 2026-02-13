import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState, useRef } from "react";
import { DndContext } from "@dnd-kit/core";

export function DraggableBox(props: {
  x: number; y: number; id: number; text?: string; src: string; class?: string; flipping?: boolean;
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
    width: window.innerWidth / 4,
    pointerEvents: isDragging ? "none" : "auto",
    transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
    cursor: "grab",
    perspective: "800px",
  };

  return (
    <div className="elt-wrapper" style={wrapperStyle}>
      <img
        className={`${props.class ?? "moving-elt"} elt-container ${props.flipping ? "flip-animation" : ""}`}
        ref={setNodeRef}
        style={{ filter: "blur(1px)", userSelect: "none" }}
        {...listeners}
        {...attributes}
        id={props.id.toString()}
        src={props.src}
      />
    </div>
  );
}

export function DragContainer(props: {
  files: { text?: string; src: string; class?: string }[];
  flippingIndex?: number | null;
}) {
  const [coords, setCoords] = useState<[number, number][]>([]);
  const [tempDraggedPos, setTempDraggedPos] = useState({ x: 0, y: 0 });
  const [activeItemId, setActiveItemId] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    const w = window.innerWidth;
    const h = window.innerHeight;
    setCoords(props.files.map((_, i) => [w / 4 * (i % 4), h / 3 * Math.floor(i / 4)]));
  }, []);

  function handleDragStart(event: any) {
    setActiveItemId(event.active.id);
    document.getElementById(event.active.id.toString())?.style.setProperty("filter", "blur(0px)");
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
        <DraggableBox key={i} x={item[0]} y={item[1]} id={i} src={props.files[i].src}
          text={props.files[i].text} class={props.files[i].class}
          flipping={props.flippingIndex === i} />
      ))}
    </DndContext>
  );
}