import WorkFrame from "../WorkFrame";
import "../../styles/Work.css";

export default function Work({ title, propFunction, propFunction2 }) {
    const content = [
        {
            name: "name 1 WATERFALL",
            description: "lorem blablablablablalbal",
            img:"img",
            url:"url"
        },
        {
            name: "name 2 for you",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 3 for me",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 4 for the whore",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 5 thumb master",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 6 for the dicks",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        },
        {
            name: "name 7 heaven",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        }
        ,
        {
            name: "name 8 mate",
            img:"img",
            description: "lorem blablablablablalbal",
            url:"url"
        }
        ,
        {
            name: "name 9 rimes",
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
