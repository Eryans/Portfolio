import { Container, Row } from "react-bootstrap";
import "../styles/Acceuil.css";

export default function Acceuil() {
    const name = "Jules";
    const lastName = "Noir--Vermeulen";
    return (
        <section className="block-section position-relative">
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
                    <h2 className="col-12 text-center px-0 titleSize">
                        Développeur Web
                    </h2>
                </Row>
                <Row>
                    <p className="col-6 col-sm-6 px-0 text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>
                </Row>
            </Container>
        </section>
    );
}
