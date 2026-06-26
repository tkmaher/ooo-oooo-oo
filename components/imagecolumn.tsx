import Image from "next/image";
import { ReactNode } from "react";

export default function ImageColumn({
    src,
    expanded,
    callback,
    title,
    body
}: {
    src: string,
    expanded: boolean,
    callback: (newSrc: string) => void,
    title?: string,
    body?: ReactNode
}) {
    return (
        <>
            <div 
                className={expanded ? "image-column selected" : "image-column"}
                onClick={() => callback(src)}
            >
                <div className="image-title">{title}</div>
                <Image src={src} fetchPriority="high" alt="Image" width={300} height={800} />
            </div>
            <div 
                className={expanded ? "expanded-content content-body" : "content-body"}
            >
                {body}
            </div>
        </>
    )
}