import "../../styles/Contact.css";

export default function Contact({title}){
    return(
        <section className="block-section parallaxSec col-12 bg-primary">
            <h1 onClick={() => console.log("click")}>{title}</h1>
            <p>Click <a style={{color:"red"}} href="mailto: someone@example.com">here</a> !</p>
        </section>
    );
}