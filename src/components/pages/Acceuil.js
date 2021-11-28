import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Modal from "../Modal";
import "../../styles/Acceuil.css";

export default function Acceuil() {

    const name = "Jules";
    const lastName = "Noir--Vermeulen";

    const [showModal,setShowModal] = useState(false);

    const modalContent = require("../../data/about-data.json");

    return (
        <section className="bg-white block-section position-relative">
            <Container className="p-0 title-container">
                <Row>
                    <span className="col-6 p-0" />
                    <h1 className="col-6 h1left titleSize px-0">
                        {" "}
                        {Array.from(name).map((x) => (
                            <span className="letter">{x}</span>
                        ))}{" "}
                        <br />
                        {Array.from(lastName).map((x) => (
                            <span className="letter">{x}</span>
                        ))}
                    </h1>
                </Row>
                <Row>
                    <h2 className="col-12 text-center px-0 titleSize titleDev">
                        Développeur Web
                    </h2>
                </Row>
                <Row>
                    <p className="col-6 px-0 text lead">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>
                </Row>
                <Row className="bottom-0 text-center m-3">
                    <div className="about" onClick={() => setShowModal(true)}>
                        <p className="m-0">À propos</p>
                    </div>
                </Row>
            </Container>
            {
                showModal && <Modal func={() => setShowModal(false)} title1={modalContent[0].title} text1={modalContent[0].text} title2={modalContent[1].title} text2={modalContent[1].text}/>
            }
        </section>
    );
}
