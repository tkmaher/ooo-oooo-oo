import Image from "next/image";
import { ReactNode } from "react";

export default function ImageColumn({
    src,
    expanded,
    callback,
    title,
    body,
    link
}: {
    src: string,
    expanded: boolean,
    callback: (newSrc: string) => void,
    title?: string,
    body?: ReactNode,
    link?: string
}) {
    return (
        <>
            <div 
                className={expanded ? "image-column selected" : "image-column"}
                onClick={() => {
                    if (link) {
                        window.open(link, "_blank");
                        return;
                    }
                    callback(src);
                }}
            >
                <div className="image-title" >{title}</div>
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