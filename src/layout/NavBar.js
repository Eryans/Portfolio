import { Nav } from "react-bootstrap";
import "../styles/NavBar.css";
import NavButton from "../components/NavButton";

export default function NavBar({bsPosition, direction, navContent, upOrDown, func}){
    console.log(func)
    return(
        <Nav className={`nav-container ${bsPosition}`}>
            <ul className={`px-3 ${upOrDown} m-0 d-flex flex-column`}>
                {
                    navContent.map((x,i) => <li key={i} className={`d-flex ${direction} align-items-center justify-content-end gap-3`}><NavButton text={x.text} icon={x.icon} link={x.link}/></li> )
                }
            </ul>
        </Nav>
    );
}