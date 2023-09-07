const Category = ({buttonText, reqType, setReqType}) => {
    return (  
        <button 
        className={`btn btn-accent lg:btn-wide ${buttonText === reqType ? null : "btn-outline"}`}
        type="button"
        onClick={() => setReqType(buttonText)}
        >
            {buttonText}
        </button>
    );
}
 
export default Category;