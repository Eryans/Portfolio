import ChangeSectionButton from "./ChangeSectionButton";

export default function Contact({title,propFunction,propFunction2}){
    return(
        <section className="block-section col-12 text-white">
            <ChangeSectionButton textContent="Up" propFunction={propFunction}/>
            <h1>{title}</h1>
            <ChangeSectionButton textContent="Acceuil" propFunction={propFunction}/>
        </section>
    );
}