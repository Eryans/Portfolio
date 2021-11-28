import { useRef } from "react";
import { Container, Row } from "react-bootstrap";

import Acceuil from "../components/pages/Acceuil";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";
import NavBar from "./NavBar";

import { navContent, navContentSocial } from "../data/nav-data";
export default function Main() {
    // This is supposed to handle wheel scroll direction but it doesn't work

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
    const executeScroll = (ref) => scrollToRef(ref);

    const myRef1 = useRef();
    const myRef2 = useRef();
    const myRef3 = useRef();

    function changeSection(ref) {
        executeScroll(ref === 0 ? myRef1:
                    ref === 1 ? myRef2:
                    ref === 2 ? myRef3: myRef1);
    }

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
