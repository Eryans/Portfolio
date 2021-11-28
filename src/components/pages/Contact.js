import "../../styles/Contact.css";
import {navContentSocial} from "../../data/nav-data";

export default function Contact({title,reference}){
    return(
        <section id="contact" ref={reference} className="block-section parallaxSec col-12 bg-primary">
            <h1 onClick={() => console.log("click")}>{title}</h1>
            <p>Contactez moi : <a style={{color:"red"}} href="mailto: julesnoir@hotmail.fr">julesnoir@hotmail.fr</a> !</p>
            {/*navContentSocial.map()*/}
        </section>
    );
}