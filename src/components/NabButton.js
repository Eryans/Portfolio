import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function NavButton(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <p className={`${!isHovered && "hidden"}`}>{props.text}</p>
            <FontAwesomeIcon icon={props.icon} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)}/> 
        </>
    );
}
