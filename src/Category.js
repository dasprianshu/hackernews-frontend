const Category = ({buttonText, reqType, setReqType}) => {

    const composite = () => {
        setReqType(buttonText);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (  
        <button 
        className={`btn btn-accent no-animation lg:btn-wide ${buttonText === reqType ? null : "btn-outline"}`}
        type="button"
        style={{width: "20vw"}}
        onClick={composite}
        >
            {buttonText}
        </button>
    );
}
 
export default Category;