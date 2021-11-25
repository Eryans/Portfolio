import { useEffect, useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Acceuil from "../components/Acceuil";
import Work from "../components/Work";
import Contact from "../components/Contact";
export default function Main() {
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

    return (
        <main style={{ backgroundColor: `${bgColors[currentColor]}` }}>
            <Container>
                <Row ref={myRef1}>
                    <Acceuil
                        title="Bloc 1"
                        propFunction={() => changeSection(myRef2, 1)}
                    />
                </Row>

                <Row ref={myRef2} className="d-flex flex-row flex-nowrap">
                    <Work
                        title="Bloc 2"
                        propFunction={() => changeSection(myRef1, 0)}
                        propFunction2={() => changeSection(myRef3, 2)}
                    />
                </Row>

                <Row ref={myRef3}>
                    <Contact title="Bloc 3" propFunction={()=>changeSection(myRef2,1)} propFunction2={()=>changeSection(myRef1,0)}/>
                </Row>
            </Container>
        </main>
    );
}
