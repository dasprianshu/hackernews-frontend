import React, {Component} from "react";
import "./Content.css";
import Upvote from "./assets/arrow_upward.svg";
import Downvote from "./assets/arrow_downward.svg";
import Comments from "./assets/forum.svg"

class Content extends Component{
    render(){
        return(
            <div className="card New-card bg-base-100 shadow-xl">
                {/* <figure><img src="https://wallpapers.com/images/featured/1080x1920-ugd930ckdcujq44s.jpg" alt="Thumbnail"/></figure> */}
                <div className="card-body News-card">
                    <a href="https://daisyui.com/" >
                        <h2 className="card-title H2inline link link-hover link-primary">{this.props.id}. Labore cupidatat veniam laboris aliquip.</h2>
                        <p className="Posted-by">by Turtelturtel</p>
                    </a>
                    
                </div>
                <div className="Actions">
                    <div className="card-actions justify-end Bottombtn">
                        <div className="btn-group">
                            <button className="btn Interact btn-sm bg-success text-lg"><img src={Upvote} alt="Up"></img></button>
                            <button className="btn Interact btn-sm bg-neutral text-lg">{this.props.points}</button>
                            <button className="btn Interact btn-sm bg-error text-lg"><img src={Downvote} alt="Dn"></img></button>
                        </div>
                        <button className="btn Cmt Interact bg-neutral btn-sm text-lg">
                            {this.props.comments} <img src={Comments} alt="Cmnt"></img>
                        </button>
                    </div>
                    <button className="btn Time Interact bg-neutral normal-case btn-sm text-md">Sept 4, 2023, 13:38</button>
                </div>
            </div>
        );
    }
}


export default Content;