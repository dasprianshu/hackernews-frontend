import { Link, useLocation } from "react-router-dom";

const Navbutton = ({buttonText}) => {
    const location = useLocation();
    const nameOfPath = location.pathname.substring(1);
    const active = nameOfPath === buttonText ? null : "btn-outline" ;
    const composite = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    return (  
        <Link to={`/${buttonText}`}>
            <button 
            className={`btn btn-accent join-item ${active} lg:text-lg no-animation lg:btn-wide`}
            style={{width: "20vw", maxWidth: "200px", minWidth: "5rem"}}
            onClick={composite}
            >
            {buttonText}
            </button>
        </Link>
    );
}
 
export default Navbutton;