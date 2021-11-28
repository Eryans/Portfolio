import { useRef } from "react";
import { Container, Row } from "react-bootstrap";


import Acceuil from "../components/pages/Acceuil";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";
import NavBar from "./NavBar";

import { navContent, navContentSocial } from "../data/nav-data";

import "../styles/Main.css"

export default function Main() {

    return (
        <main>
            <NavBar
                bsPosition="bottom-0 start-0"
                direction="flex-row-reverse"
                navContent={navContentSocial}
                upOrDown="down"
            />
            <NavBar bsPosition="end-0" navContent={navContent} upOrDown="up"/>
            <Container fluid id="content-container">
                <Row >
                    <Acceuil/>
                </Row>

                <Row  className="d-flex flex-row flex-nowrap">
                    <Work/>
                </Row>

                <Row>
                    <Contact title="Contact" />
                </Row>
            </Container>
        </main>
    );
}
