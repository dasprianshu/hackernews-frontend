import React, {Component} from "react";
import "./Content.css";

class Content extends Component{
    render(){
        return(
            <div className="card bg-base-100 shadow-xl">
                {/* <figure><img src="https://wallpapers.com/images/featured/1080x1920-ugd930ckdcujq44s.jpg" alt="Thumbnail"/></figure> */}
                <div className="card-body News-card">
                    <a href="https://daisyui.com/docs/colors/" className="link link-hover link-primary">
                        <h2 className="card-title">New movie is released!</h2>
                    </a>
                    <p>Labore cupidatat veniam laboris aliquip. Sunt enim aliqua excepteur in dolor aliqua amet. Commodo mollit consectetur Lorem voluptate laboris aliquip. Sunt enim aliqua excepteur in dolor aliqua amet. Commodo mollit consectetur laboris aliquip. Sunt enim aliqua excepteur in dolor aliqua amet.</p>
                </div>
                <div className="card-actions justify-end Bottombtn">
                    <button className="btn  no-animation btn-sm">Button</button>
                    <div className="btn-group">
                        <button className="btn Interact no-animation btn-sm bg-success text-xl">&#8679;</button>
                        <button className="btn Interact no-animation btn-sm bg-error text-xl">&#8681;</button>
                    </div>
                </div>
            </div>
        );
    }
}


export default Content;