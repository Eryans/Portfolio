import { Container, Row } from "react-bootstrap";
import {modalContent} from "../../data/about-data"
import Modal from "../Modal";
import "../../styles/Acceuil.css";

export default function Acceuil({reference, showModal,modalFunc}) {

    const name = "Jules";
    const lastName = "Noir--Vermeulen";


    return (
        <section id="acceuil" ref={reference} className="block-section position-relative">
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
                <Row className="position-relative">
                    <p className="col-6 px-0 text lead">
                        {modalContent[2].text}
                    </p>
                    <div className="about col-6 " onClick={() => modalFunc(true)}>À propos</div>
                </Row>
                <Row className="bottom-0 text-center m-3">
                    
                </Row>
            </Container>
            {
                showModal && <Modal func={() => modalFunc(false)} title1={modalContent[0].title} text1={modalContent[0].text} title2={modalContent[1].title} text2={modalContent[1].text}/>
            }
        </section>
    );
}
