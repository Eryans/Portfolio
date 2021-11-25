import ChangeSectionButton from "./ChangeSectionButton";

export default function Acceuil({title,propFunction}){
    return(
        <section className="block-section col-12">
            <h1>{title}</h1>
            <ChangeSectionButton textContent="Down" propFunction={propFunction}/>
        </section>
    );
}