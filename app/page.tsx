"use client";

import ImageColumn from "@/components/imagecolumn";
import { useCallback, useState } from "react";
import Info from "./lyrics/page";


export default function DragCtx() {

  const [expandedSrc, setExpandedSrc] = useState<string | null>(null);

  const setOpen = useCallback((newSrc: string) => {
    if (expandedSrc === newSrc) {
      setExpandedSrc(null);
    } else {
      setExpandedSrc(newSrc);
    }
  }, [expandedSrc]);


  const ALL_FILES = [
    { 
      src: "/imgs/1.png",
      title: "Album"
    },
    { 
      src: "/imgs/2.png",
      title: "Upcoming Shows"
    },
    { 
      src: "/imgs/3.PNG",
      title: "Old Shows"
    },
    { 
      src: "/imgs/4.png", 
      title: "Info",
      body: <Info/>
    },
    { 
      src: "/imgs/5.gif",    
      title: "Movie"
    },
    { src: "/imgs/6.png",
      title: "Merchandise"
    },
    { src: "/imgs/7.png", 
      title: "Contact"
    },
    { src: "/imgs/8.png",
      title: "Album"
    },
    { src: "/imgs/9.png",
      title: "Album"
    },
    { src: "/imgs/10.webp",
      title: "Album"
    },
    { src: "/imgs/11.png",
      title: "Album"
    },
    { src: "/imgs/12.png",
      title: "Album"
    },
    { src: "/imgs/13.png",
      title: "Album"
    },
    { src: "/imgs/14.JPEG",
      title: "Bandcamp"
    },
  ];


  return (
    <div className="total-container">
      <div className="column-container">
        {ALL_FILES.map((file, index) => (
          <ImageColumn 
            src={file.src} 
            key={index} 
            expanded={file.src === expandedSrc} 
            callback={setOpen} 
            title={file.title}
            body={file.body}
          />
        ))}
      </div>
    </div>
  );
}