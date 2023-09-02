import React, {Component} from "react";
import "./Content.css";

class Content extends Component{
    render(){
        return(
            <div className="card bg-base-100 shadow-xl">
                {/* <figure><img src="https://wallpapers.com/images/featured/1080x1920-ugd930ckdcujq44s.jpg" alt="Thumbnail"/></figure> */}
                <div className="card-body News-card">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Labore cupidatat veniam laboris aliquip. Sunt enim aliqua excepteur in dolor aliqua amet. Commodo mollit consectetur Lorem voluptate duis amet proident eiusmod reprehenderit.</p>
                    <div className="card-actions justify-end">
                    <div className="btn-group">
                        <button className="btn btn-sm btn-active">Button</button>
                        <button className="btn btn-sm">Button</button>
                        <button className="btn btn-sm">Button</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Content;