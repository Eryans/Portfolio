import { useEffect, useState, useRef } from "react";
import "../styles/WorkFrame.css";

export default function WorkFrame({ name, url, img, description }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedClassName, setExpandedClassName] = useState("");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const overlayRef = useRef();
    useEffect(() => {
        isExpanded
            ? setExpandedClassName(() => "expanded")
            : setExpandedClassName(() => " ");
        setScreenWidth(window.innerWidth);
    }, [isExpanded, screenWidth]);

    function displayOverlay(ref, show) {
        if (show) {
            ref.current.style.opacity = 0.7;
            ref.current.style.width = "100%";
            ref.current.style.height = "100%";
        } else {
            ref.current.style.opacity = 0;
            ref.current.style.width = 0;
            ref.current.style.height = 0;
        }
    }

    return (
        <article
            class={`d-flex justify-content-center align-items-center ${expandedClassName}`}
            onClick={() => !isExpanded && setIsExpanded(true)}
            style={{
                writingMode:
                    !isExpanded && screenWidth > 768
                        ? "vertical-lr"
                        : "horizontal-tb",
                textOrientation: !isExpanded && screenWidth > 768 && "upright",
            }}
            onPointerEnter={() => displayOverlay(overlayRef, false)}
            onPointerLeave={() => displayOverlay(overlayRef, true)}
        >
            {isExpanded && (
                <button
                    style={{
                        background: "none",
                        border: "none",
                        color: "white",
                    }}
                    onClick={() => setIsExpanded(false)}
                >
                    &#60; Go back
                </button>
            )}
            {!isExpanded && <div ref={overlayRef} className="overlay" />}
            <h3 id="wf-title">{name}</h3>
            {img && <img src={img} alt="Illustration Projet" />}
            {isExpanded && (
                <div className="frame-content">
                    <p>{description}</p>
                    <a href={url} alt="Lien vers projet">
                        {" "}
                    </a>
                </div>
            )}
        </article>
    );
}
