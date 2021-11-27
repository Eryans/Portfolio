import WorkFrame from "../WorkFrame";
import "../../styles/Work.css";

export default function Work({ title, propFunction, propFunction2 }) {
    const content = [
        {
            name: "name 1",
            description: "lorem blablablablablalbal",
            img:"img",
            url:"url"
        },
        {
            name: "name 2",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 3",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 4",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 5",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 6",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        }
    ];
    return (
        <section className="block-section bg-white position-relative project-container">
            <h1 id="w-title">Mes travaux</h1>
                <ul className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-4 gap-3">
                    {
                        content.map((x,i) => <li key={i}> <WorkFrame name={x.name} url={x.url} description={x.description}/> </li>)
                    }
                </ul>
        </section>
    );
}
