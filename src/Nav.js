import { Link } from "react-router-dom";
import "./Nav.css";
import Navbutton from "./Navbutton";
import Logo from "./assets/BareLogo.png";
// import React, { useState } from 'react';

function Nav() {
    // const [searchState, setSearchState] = useState(false);

    return ( 
        <div className="navbar bg-base-200 text-primary-content">
            <Link to='/'>
                <button className="Logo btn btn-accent btn-outline no-animation">
                    <img src={Logo} alt="logo"></img>
                </button> 
            </Link>

            <ul className="join btnGroup">
                <Navbutton buttonText="top"/>
                <Navbutton buttonText="new"/>
                <Navbutton buttonText="best"/>
            </ul>

            {/* <button onClick={() => {setSearchState(true);}} className="btn btn-accent" style={{display: searchState ? 'none' : 'block'}}>&#x1F50D;</button>
            <div className="">
                <div className="form-control" style={{display: searchState ? 'block' : 'none'}}>
                    <input type="text" placeholder="&#x1F50D;" className="input input-accent Searchbar" style={{textAlign: "right"}}/>
                </div>
            </div> */}
        </div>
    );
}

export default Nav;