import { useEffect, useState } from "react";
import "../styles/Modal.css";
import Tech from "./Tech";
import { tech_data } from "../data/tech-data";

export default function Modal({ func, title1, text1, title2, text2 }) {
    const [destination, setDestination] = useState("-100vh");
    const [destination2, setDestination2] = useState("100vh");
    const [textOpacity, setTextOpacity] = useState(0);
    const [containerHeight, setContainerHeight] = useState("100%");

    useEffect(() => {
        setTimeout(() => showModalAnim(true), 50); // Using SetTimeOut to make sure animation start and program doesn't set destination to 0 on mount
    }, []);

    function showModalAnim(isIn) {
        if (isIn) {
            setDestination(0);
            setDestination2(0);
            setTimeout(() => {
                setTextOpacity(1);
                setContainerHeight("fit-content");
            },1000);
        } else {
            setDestination("-100vh");
            setDestination2("100vh");
        }
    }
    function closeModal() {
        showModalAnim(false);
        setTimeout(() => {
            func();
        }, 600);
    }
    return (
        <div id="mdl-container">
            <section
                id="mdl-1"
                className="m-section"
                style={{ top: destination, left: destination }}
            >
                <button
                    className="position-absolute top-0 m-2 start-0 btn-close"
                    onClick={closeModal}
                />
                <div className="opacity-anim" style={{ opacity: textOpacity,height:containerHeight }}>
                    <h2 id="mdl-title" className="mdl-text mb-2 mb-md-5">{title1}</h2>
                    <p className="mdl-text">{text1}</p>
                </div>
            </section>
            <section
                id="mdl-2"
                className="m-section"
                style={{ top: destination2, left: destination2 }}
            >
                <div className="opacity-anim" style={{ opacity: textOpacity,height:containerHeight }}>
                    <h2 id="mdl-title">{title2}</h2>
                    <ul id="tech-list">
                        { tech_data.map((x,i) => <li key={i}><Tech title={x.name} img={x.logo}/></li>)}
                    </ul>
                </div>
            </section>
        </div>
    );
}
