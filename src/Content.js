import React, { useState, useEffect } from 'react';
import "./Content.css";
import { ProgressBar } from 'react-loader-spinner';
import Cmnt from "./assets/forum.svg"
//https://hacker-news.firebaseio.com/v0/item/856763.json

function Content({itemId}) {

    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [story, setStory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${itemUrl}${itemId}.json`);
				const data = await response.json();	
				setStory(data);
                setIsLoading(false);
			}
			catch(err){
				console.log(err);
                setIsLoading(false);
			}
		}
		fetchItems();
	})

    const options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', hour12: false, minute: 'numeric'};
    const milliUnixTime = story.time * 1000;
    const dateObject = new Date(milliUnixTime);
    const humanTime = dateObject.toLocaleString("en-US", options);

    return (  
        <div className="card New-card bg-base-100 shadow-xl">
            <ProgressBar
            height="70"
            width="100"
            visible={isLoading}
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = 'hsl(var(--n))'
            barColor = 'hsl(var(--a))'
            />
            <div style={{display: isLoading ? 'none' : 'block'}}>
                <div className="card-body News-card">
                    <a href={story.url} target='blank' rel="noreferrer noopener">
                        <h2 className="card-title H2inline link link-hover link-accent">{story.title}</h2>
                    </a>
                </div>
                <div className="Actions">
                    <div className="card-actions justify-end Bottombtn">
                        <div className="btn-group">
                            <button className="btn Interact no-animation  btn-sm bg-accent text-md">
                            {story.score} 
                            </button>
                            
                            <button className="btn Posted-by Interact normal-case btn-sm bg-base-200 text-md">{story.by}</button>

                            <button className="btn Cmt Interact bg-neutral btn-sm text-md">
                            {story.descendants} <img src={Cmnt} alt="Cmnt"></img>
                            </button>
                        </div>


                    </div>
                        <button className="btn Time Interact link-hover no-animation bg-neutral normal-case btn-sm text-md">{humanTime}</button>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Content;