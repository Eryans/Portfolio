import "../styles/Contact.css";

export default function Contact({title,propFunction,propFunction2}){
    return(
        <>
        <div className="block-section bg-danger" style={{opacity:0}}/>
        <section className="block-section parallaxSec col-12 bg-primary">
            <h1>{title}</h1>
        </section>
        </>
    );
}