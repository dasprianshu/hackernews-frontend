import "./Nav.css";
import Category from "./Category";
// import smallLogo from "./assets/smallLogo.png"
// import bigLogo from "./assets/bigLogo.png"
function Nav({reqType, setReqType}) {

    return ( 
        <div className="navbar bg-base-200 text-primary-content">
            <div className="flex-1">
                <a href='https://news.ycombinator.com/' className="btn Bigbtn no-animation btn-outline btn-accent text-xl Marginleft">HackerNews</a>
                <a href='https://news.ycombinator.com/' className="btn Smallbtn no-animation btn-outline btn-accent text-xl Marginleft">HN</a>
                {/* <a href="" className="Bigbtn Marginleft"> <img src={bigLogo}></img> </a>
                <a href="" className="Smallbtn Marginleft"> <img src={smallLogo}></img> </a> */}
            </div>

            <form 
            onSubmit={(e) => e.preventDefault()} 
            className="btn-group Marginright"
            >
                <Category
                buttonText="top"
                reqType={reqType}
                setReqType={setReqType}
                />
                <Category
                buttonText="new"
                reqType={reqType}
                setReqType={setReqType}
                />
                <Category
                buttonText="best"
                reqType={reqType}
                setReqType={setReqType}
                />
            </form>

            

            {/* <div className="flex-none Marginright">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-accent Searchbar" />
                </div>
                
            </div> */}
        </div>
    );
}

export default Nav;