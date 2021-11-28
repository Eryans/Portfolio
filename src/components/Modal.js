import { useEffect, useState } from "react";
import "../styles/Modal.css"

export default function Modal({func}){

    const [destination,setDestination] = useState("-100vh");
    const [destination2,setDestination2] = useState("100vh");

    useEffect(() => {
        setTimeout(() =>
        showModalAnim(true),50); // Using SetTimeOut to make sure animation start and program doesn't set destination to 0 on mount
    },[])

    function showModalAnim(isIn){
        if (isIn) {setDestination(0); setDestination2(0)}
        else {setDestination("-100vh"); setDestination2("100vh");}
    }
    function closeModal(){
        showModalAnim(false);
        setTimeout(() => {
            func();
        }, 600);
    }
    return (
        <div id="mdl-container">
            <section id="mdl-1" className="m-section" style={{top:destination, left:destination}}>
                <button className="position-absolute top-0 m-2" onClick={closeModal}>X</button>
                <h2>Title 1</h2>
                <p>Text lorem ipsum balblablablablalbla</p>
            </section>
            <section id="mdl-2" className="m-section" style={{top:destination2, left:destination2}}>
                <h2>Title 2</h2>
                <p>Text lorem ipsum balblablablablalbla</p>
            </section>
        </div>
    );
}