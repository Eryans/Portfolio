import { useEffect, useState, useRef } from "react";
import "../styles/WorkFrame.css";

export default function WorkFrame({ name, url, description, img}) {

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
            ref.current.style.opacity = screenWidth > 768 ? .6 : .4; // opacity is lighter on mobile as there is no hover animation
            ref.current.style.width = "100%";
            ref.current.style.height = "100%";
        } else {
            ref.current.style.opacity = 0;
            ref.current.style.width = 0;
            //ref.current.style.height = 0;
        }
    }

    return (
        <article
            class={`d-flex justify-content-center align-items-center ${expandedClassName}`}
            onClick={() => !isExpanded && setIsExpanded(true)}
            style={{ // Text Orientation for desktop or mobile
                writingMode:
                    !isExpanded && screenWidth > 768
                        ? "vertical-lr"
                        : "horizontal-tb",
                textOrientation: !isExpanded && screenWidth > 768 && "upright",
                backgroundImage:`url(${img})`
            }}
            onPointerEnter={() => !isExpanded && displayOverlay(overlayRef, false)} // Only check when cards are not expanded to avoid crash
            onPointerLeave={() => !isExpanded && displayOverlay(overlayRef, true)} // Because ref is null when isExtended = true
        >
            {isExpanded && (
                <button
                    style={{
                        background: "none",
                        border: "none",
                        color: "white",
                        backgroundColor:"rgba(0,0,0,.75)",
                        borderRadius:"5px",
                        marginBottom:".5em"
                    }}
                    onClick={() => setIsExpanded(false)}
                >
                    &#60; Go back
                </button>
            )}
            {!isExpanded && <div ref={overlayRef} className="overlay" />}
            {!isExpanded && <h3 id="wf-title">{name}</h3>}
            <section className="p-2"style={{backgroundColor:isExpanded && "rgba(0,0,0,.75)",borderRadius:"5px"}}>
                {isExpanded && (
                    <div id="frame-content">
                        <h3 id="wf-title">{name}</h3>
                        <p>{description}</p>
                        <a href={url} alt="Lien vers projet">
                            {url}
                        </a>
                    </div>
                )}
            </section>
        </article>
    );
}
