import { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";


import Acceuil from "../components/pages/Acceuil";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";
import NavBar from "./NavBar";

import { navContent, navContentSocial } from "../data/nav-data";

import "../styles/Main.css"

export default function Main() {

    const [showModal,setShowModal] = useState(false);

    function displayModal(bool){
        setShowModal(bool);
    }

    return (
        <main>
            <NavBar
                bsPosition="bottom-0 start-0"
                direction="flex-row-reverse"
                navContent={navContentSocial}
                upOrDown="down"
                isNav={false}
            />
            <NavBar bsPosition="end-0" navContent={navContent} upOrDown="up" isNav={true} func={setShowModal}/>
            <Container fluid id="content-container">
                <Row >
                    <Acceuil showModal={showModal} modalFunc={displayModal}/>
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
