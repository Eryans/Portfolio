import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";

import {
    faLaptop,
    faHome,
    faComment,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import Acceuil from "../components/pages/Acceuil";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";
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

    function changeSection(ref) {
        executeScroll(ref === 0 ? myRef1:
                    ref === 1 ? myRef2:
                    ref === 2 ? myRef3: myRef1)
        setCurrentColor(() => ref);
    }
    const navContent = [
        {
            text: "Acceuil",
            icon: faHome,
            ref:0
        },
        {
            text: "A propos",
            icon: faComment,
            ref:0
        },
        {
            text: "Mes Projets",
            icon: faLaptop,
            ref:1
        },
        {
            text: "Contact",
            icon: faAddressBook,
            ref:2
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
            <NavBar bsPosition="end-0" navContent={navContent} upOrDown="up" func={changeSection} />
            <Container fluid className="">
                <Row ref={myRef1}>
                    <Acceuil />
                </Row>

                <Row ref={myRef2} className="d-flex flex-row flex-nowrap">
                    <Work/>
                </Row>

                <Row ref={myRef3}>
                    <Contact title="Contact" />
                </Row>
            </Container>
        </main>
    );
}
