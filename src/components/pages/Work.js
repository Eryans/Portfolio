import WorkFrame from "../WorkFrame";
import "../../styles/Work.css";
import { content } from "../../data/work-data";


export default function Work({reference}) {
    return (
        <section id="work" ref={reference} className="block-section bg-white position-relative project-container">
            <h1 id="w-title">Mes travaux</h1>
                <ul className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-4 gap-3">
                    {
                        content.map((x,i) => <li key={i}> <WorkFrame name={x.name} url={x.url} description={x.description} img={x.img}/> </li>)
                    }
                </ul>
        </section>
    );
}
