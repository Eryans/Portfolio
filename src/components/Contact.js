import ChangeSectionButton from "./ChangeSectionButton";

export default function Contact({title,propFunction,propFunction2}){
    return(
        <section className="block-section col-12 text-white position-relative">
            <ChangeSectionButton textContent="Up" propFunction={propFunction} isUp={true}/>
            <h1>{title}</h1>
            <ChangeSectionButton textContent="Acceuil" propFunction={propFunction2} isUp={false}/>
        </section>
    );
}