import { useDraggable } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { useRouter } from 'next/navigation';

export function DraggableBox(props: { 
    x: number; 
    y: number; 
    id: number; 
    type: string; 
    text?: string; 
    src: string; 
    class?: string 
}) {

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: props.id,
    });
  
    // Combine saved position + active drag transform
    const translate = {
        x: props.x + (transform?.x ?? 0),
        y: props.y + (transform?.y ?? 0),
    };

    const [randWidth, setRandWidth] = useState<number>(200);

    useEffect(() => {
        setRandWidth((Math.random() * 200) + 100);
    }, [])
  
    const style: React.CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: isDragging ? "none" : "auto", // prevent interaction issues
        transform: `translate3d(${translate.x}px, ${translate.y}px, 0)`,
        cursor: "grab",
        width: randWidth,
        filter: "blur(5px)"
    };
  
    return (
        <div
            className="elt-container"
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            id={props.id.toString()}
            
        >
            {props.type === "img" && (<img
                className={props.class != null ? props.class : "moving-elt"}
                src={props.src}
                alt="o"
                style={{ display: "block", userSelect: "none" }} // avoid image selection
                />
            )}
            {props.type === "text" && (<div
                className={props.class != null ? props.class : "moving-elt"}
                style={{ display: "block", userSelect: "none" }} 
                >{props.src}</div>
            )}
            
        </div>
    );
}

export function DragContainer(props: {files: { type: string, text?: string, src: string, class?: string; }[] }) {
    const [coords, setCoords] = useState<[number, number][]>([]);
    const [tempDraggedPos, setTempDraggedPos] = useState({ x: 0, y: 0 });
    const [activeItemId, setActiveItemId] = useState<number | null>(null);


    useEffect(() => {
        const hasWindow = typeof window !== 'undefined';
        const width = hasWindow ? window.innerWidth : 1200;
        const height = hasWindow ? window.innerHeight : 1000;
        const initCoords: [number, number][] = props.files.map(() => [
        (Math.random() * width),
        (Math.random() * height)
        ]);
        setCoords(initCoords);
    }, []);

    function handleDragStart(event: any) {
        setActiveItemId(event.active.id);
        const item = document.getElementById(event.active.id.toString());
        if (item) {
            item.style.filter = "blur(0px)";
        }
      }
    
    function handleDragMove(event: any) {
        if (activeItemId === null) return;
    
        const draggedIndex = activeItemId;
    
        const draggedPos = {
            x: coords[draggedIndex][0] + (event.delta?.x ?? 0),
             y: coords[draggedIndex][1] + (event.delta?.y ?? 0),
        };
    
        setTempDraggedPos(draggedPos);
    }
    
    function handleDragEnd() {
        if (activeItemId === null) return;
    
        // Commit the new position
        setCoords((prev) =>
        prev.map((coord, index) =>
            index === activeItemId ? [tempDraggedPos.x, tempDraggedPos.y] : coord
        )
    );
    
        const item = document.getElementById(activeItemId.toString());
        if (item) item.style.filter = "blur(" + Math.random() * 5 + "px)";
    
        setActiveItemId(null);
    }
      
    return (
        <DndContext
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
        
      >
        {coords.map((item, index) => (
          <DraggableBox
            key={index}
            x={item[0]}
            y={item[1]}
            id={index}
            type={props.files[index].type}
            src={props.files[index].src}
            text={props.files[index].text}
            class={props.files[index].class}
          />
        ))}
      </DndContext>
    )
}
