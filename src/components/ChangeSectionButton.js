export default function ChangeSectionButton({propFunction, textContent}){
    return (
        <button onClick={propFunction}>
            {textContent}
        </button>
    );
}