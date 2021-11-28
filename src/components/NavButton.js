import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function NavButton(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <p className={`${!isHovered && "hidden"}`}>{props.text}</p>
            <Link to={"/pathLink"+props.link} smooth>
                <FontAwesomeIcon icon={props.icon} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} />
            </Link> 
        </>
    );
}
