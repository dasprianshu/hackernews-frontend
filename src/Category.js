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
        className={`btn join-item btn-accent lg:text-lg no-animation lg:btn-wide ${buttonText === reqType ? null : "btn-outline"}`}
        type="button"
        style={{width: "20vw", maxWidth: "230px"}}
        onClick={composite}
        >
            {buttonText}
        </button>
    );
}
 
export default Category;