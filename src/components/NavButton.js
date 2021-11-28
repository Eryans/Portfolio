import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "../styles/NavButton.css"

export default function NavButton(props) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <p className={`${!isHovered && "hidden"}`}>{props.text}</p>
            {
                props.isNav &&
                <Link to={"/pathLink"+props.link} smooth className="link">
                    <FontAwesomeIcon icon={props.icon} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} onClick={() => props.text.includes("propos")&& props.modalFunc(true)}/>
                </Link>
            }
            {
                !props.isNav &&
                <a href={props.link} target="_blank" rel="noreferrer" className="link" >
                    <FontAwesomeIcon icon={props.icon} onPointerEnter={() => setIsHovered(true)} onPointerLeave={() => setIsHovered(false)} />
                </a>
            }
        </>
    );
}
