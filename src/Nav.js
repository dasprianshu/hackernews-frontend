import "./Nav.css";
import Category from "./Category";
import Up from './assets/arrow_up.svg';
import { useState } from "react";

function Nav({reqType, setReqType}) {

    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 1000){
            setVisible(true);
        }
        else if(scrolled <= 1000){
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);

    return ( 
        <div className="navbar bg-base-200 text-primary-content">
            <div className="flex-1">
                <a href='https://news.ycombinator.com/' className="btn Bigbtn no-animation btn-outline btn-accent text-xl Marginleft">HackerNews</a>
                <a href='https://news.ycombinator.com/' className="btn Smallbtn no-animation btn-outline btn-accent text-xl Marginleft">HN</a>
            </div>
            <form 
            onSubmit={(e) => e.preventDefault()} 
            className="btn-group Marginright"
            style={{display: visible ? 'none' : 'inherit'}}
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

            <button 
            onClick={scrollToTop}
            className="btn btn-square btn-outline btn-accent App-up Marginright"
            style={{display: visible ? 'inherit' : 'none'}}
            >
				<img src={Up} alt="up" />
			</button>

            {/* <div className="flex-none Marginright">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-accent Searchbar" />
                </div>
                
            </div> */}
        </div>
    );
}

export default Nav;