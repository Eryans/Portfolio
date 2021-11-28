import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tech({img,title}){
    return(
        <>
            <FontAwesomeIcon icon={img}/>
            <p>{title}</p>
        </>
    );
}