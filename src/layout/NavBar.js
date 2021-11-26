import { Nav } from "react-bootstrap";
import "../styles/NavBar.css";
import NavButton from "../components/NabButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee,faHome,faComment } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({bsPosition, direction, navContent, upOrDown}){

    return(
        <Nav className={`nav-container ${bsPosition}`}>
            <ul className={`px-3 ${upOrDown} m-0 d-flex flex-column`}>
                {
                    navContent.map((x,i) => <li key={i} className={`d-flex ${direction} align-items-center justify-content-end gap-3`}><NavButton text={x.text} icon={x.icon}/></li> )
                }
            </ul>
        </Nav>
    );
}