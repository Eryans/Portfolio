import { useEffect, useState } from "react";
import "../styles/WorkFrame.css";

export default function WorkFrame({ name, url, img, description }) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedClassName,setExpandedClassName] = useState("");
    const [screenWidth,setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        isExpanded ? setExpandedClassName(() => "expanded") : setExpandedClassName(() => " ");
        setScreenWidth(screenWidth)
        console.log(screenWidth)
    },[isExpanded,screenWidth])

    return (
        <article
            class={`d-flex justify-content-center align-items-center ${expandedClassName}`}
            onClick={() => !isExpanded && setIsExpanded(true)}
            style={{writingMode: (!isExpanded||screenWidth>768) && "vertical-lr",textOrientation:(!isExpanded||screenWidth>768) && "upright"}}
        >
            {isExpanded && 
            <button onClick={() => setIsExpanded(false)}> Go back</button>
            }
            <h3>{name}</h3>
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
