import "./Nav.css";
import Navbutton from "./Navbutton";
import Logo from "./assets/Logo.png";
// import React, { useState } from 'react';

function Nav() {
    // const [searchState, setSearchState] = useState(false);

    return ( 
        <div className="navbar bg-base-200 text-primary-content">
            <a href='/' className="Logo"> <img src={Logo} alt="logo"></img> </a>

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