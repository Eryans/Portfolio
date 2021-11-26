export default function ChangeSectionButton({propFunction, textContent, isUp}){
    return (
        <button className={`col-12 position-absolute ${isUp ? "top-0" : "bottom-0"}`} onClick={propFunction}>
            {textContent}
        </button>
    );
}