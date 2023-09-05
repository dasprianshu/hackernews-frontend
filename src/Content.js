import React, {Component} from "react";
import "./Content.css";
// import Upvote from "./assets/arrow_upward.svg";
// import Downvote from "./assets/arrow_downward.svg";
import Comments from "./assets/forum.svg"

class Content extends Component{
    render(){
        return(
            <div className="card New-card bg-base-100 shadow-xl">
                <div className="card-body News-card">
                    <a href="https://daisyui.com/" >
                        <h2 className="card-title H2inline link link-hover link-accent">{this.props.id}. Labore cupidatat veniam laboris aliquip.</h2>
                    </a>
                </div>
                <div className="Actions">
                    <div className="card-actions justify-end Bottombtn">
                        <div className="btn-group">
                            <button className="btn Interact no-animation  btn-sm bg-accent text-md">
                                {this.props.points} 
                            </button>
                            
                            <button className="btn Posted-by Interact normal-case btn-sm bg-base-200 text-md">by Turtelturtel</button>

                            <button className="btn Cmt Interact bg-neutral btn-sm text-md">
                                {this.props.comments} <img src={Comments} alt="Cmnt"></img>
                            </button>
                        </div>


                    </div>
                        <button className="btn Time Interact link-hover no-animation bg-neutral normal-case btn-sm text-md">09-04-2023, 13:38</button>
                    
                </div>
            </div>
        );
    }
}


export default Content;