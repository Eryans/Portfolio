import ChangeSectionButton from "./ChangeSectionButton";

export default function Work({title, propFunction,propFunction2}){
    return(
        <section className="block-section col-12 position-relative">
            <ChangeSectionButton propFunction={propFunction} textContent="Up" isUp={true}/>
            <h1>{title}</h1>
            <ChangeSectionButton propFunction={propFunction2} textContent="Down" isUp={false}/>
        </section>
    );
}