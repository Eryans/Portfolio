import "../../styles/Contact.css";
import {navContentSocial} from "../../data/nav-data";
import NavButton from "../NavButton";

export default function Contact({title,reference}){
    return(
        <section id="contact" ref={reference} className="block-section parallaxSec col-12">
            <h2>Contactez moi : <a id="mail-link" href="mailto: julesnoir@gmail.com">julesnoir@gmail.com</a> !</h2>
            <ul id="socialmedia" className="d-flex justify-content-center ">
            {navContentSocial.map((x,i)=> <li key={i}> <NavButton icon={x.icon} link={x.link} isNav={false} modalFunc={ null }/> </li>)}
            </ul>
        </section>
    );
}