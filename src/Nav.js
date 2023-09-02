import "./Nav.css";
import React, {Component} from "react";

class Nav extends Component{
    render(){
        return(
            <div className="navbar bg-neutral text-primary-content">
                <div className="flex-1">
                    <a href='https://github.com/' className="btn Bigbtn btn-ghost normal-case text-xl">HackerNews</a>
                    <a href='https://github.com/' className="btn Smallbtn no-animation btn-ghost normal-case text-xl">HN</a>
                </div>
                <div className="flex-none Marginright">
                    <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-accent Searchbar" />
                    </div>
                    
                </div>
		    </div>
        );
    }
}

export default Nav;