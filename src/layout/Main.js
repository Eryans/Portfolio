import { useEffect, useRef, useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";

import {
    faLaptop,
    faHome,
    faComment,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import Acceuil from "../components/Acceuil";
import Work from "../components/Work";
import Contact from "../components/Contact";
import NavBar from "./NavBar";
import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Main() {
    // This is supposed to handle wheel scroll direction but it doesn't work
    const wheelDirection = (e) =>
        e.nativeEvent.wheelDelta > 0 ? "up" : executeScroll(myRef3);

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const executeScroll = (ref) => scrollToRef(ref);

    const myRef1 = useRef();
    const myRef2 = useRef();
    const myRef3 = useRef();

    const bgColors = ["#69FFF1", "#63D471", "#233329"];
    const [currentColor, setCurrentColor] = useState(0);

    useEffect(() => {});

    function changeSection(ref, currentColor) {
        executeScroll(ref);
        setCurrentColor(() => currentColor);
    }
    function changeColorByScroll(e) {
        // To Do
    }
    const navContent = [
        {
            text: "Acceuil",
            icon: faHome,
        },
        {
            text: "A propos",
            icon: faComment,
        },
        {
            text: "Mes Projets",
            icon: faLaptop,
        },
        {
            text: "Contact",
            icon: faAddressBook,
        },
    ];
    const navContentSocial = [
        {
            text: "GitHub",
            icon: faGithub,
        },
        {
            text: "Twitter",
            icon: faTwitter,
        },
        {
            text: "Linkedin",
            icon: faLinkedin,
        },
        {
            text: "Something",
            icon: faAddressBook,
        },
    ];
    return (
        <main>
            <NavBar
                bsPosition="bottom-0 start-0"
                direction="flex-row-reverse"
                navContent={navContentSocial}
                upOrDown="down"
            />
            <NavBar bsPosition="end-0" navContent={navContent} upOrDown="up" />
            <Container fluid className="">
                <Row ref={myRef1}>
                    <Acceuil propFunction={() => changeSection(myRef2, 1)} />
                </Row>

                <Row ref={myRef2} className="d-flex flex-row flex-nowrap">
                    <Work
                        propFunction={() => changeSection(myRef1, 0)}
                        propFunction2={() => changeSection(myRef3, 2)}
                    />
                </Row>

                <Row ref={myRef3}>
                    <Contact title="Contact" />
                </Row>
            </Container>
        </main>
    );
}
