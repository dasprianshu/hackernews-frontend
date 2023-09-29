import React, { useState, useEffect } from 'react';
import "./Content.css";
import { ProgressBar } from 'react-loader-spinner';
import Cmnt from "../assets/forum.svg";
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

    function getHostName(fullURL) {
        try {
            const url = new URL(fullURL);
            return url.hostname;
        } catch (error) {
            console.error('Invalid URL:', fullURL);
            return null; 
        }
    }

    function timeElapsed(time) {
        const currentTime = Math.floor(Date.now() / 1000);
        const elapsedSeconds = currentTime - time; 
        if (elapsedSeconds < 60) {
        return `${elapsedSeconds} sec${elapsedSeconds !== 1 ? 's' : ''} ago`;
        } else if (elapsedSeconds < 3600) {
        const minutes = Math.floor(elapsedSeconds / 60);
        return `${minutes} min${minutes !== 1 ? 's' : ''} ago`;
        } else if (elapsedSeconds < 86400) {
        const hours = Math.floor(elapsedSeconds / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (elapsedSeconds < 604800) {
        const days = Math.floor(elapsedSeconds / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
        } else if (elapsedSeconds < 2419200) {
        const weeks = Math.floor(elapsedSeconds / 604800);
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        } else if (elapsedSeconds < 29030400) {
        const months = Math.floor(elapsedSeconds / 2419200);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
        } else {
        const years = Math.floor(elapsedSeconds / 29030400);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
        }
    }

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
                        <h2 className="card-title link link-hover link-accent">{story.title}</h2>
                    </a>
                    <div className='Content-info'>
                        <span className='text-neutral-content text-sm'><i>{getHostName(story.url)}</i></span> 
                        <span className='text-neutral-content text-sm'>{timeElapsed(story.time)}</span>
                    </div>
                </div>
                <div className="Actions">
                    <div className="card-actions justify-end Bottombtn">
                        <div className="btn-group">
                            <button className="btn Interact no-animation normal-case btn-sm bg-accent text-md hover:bg-accent">
                            {story.score}
                            {/* <img src={Up} alt="Upvote"></img> */}
                            </button>
                            
                            <button className="btn Cmt Interact bg-base-200 normal-case btn-sm text-md">{story.by}</button>

                            <button className="btn Posted-by no-animation Interact btn-sm bg-neutral hover:bg-neutral text-md">
                            {story.descendants}
                            <img src={Cmnt} alt="Cmnt"></img>
                            </button>
                        </div>


                    </div>
                    <a href='/comments'>
                        <button className="btn md:btn-wide View-post Time bg-neutral normal-case btn-sm text-md hover:bg-accent">
                         Discussion
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default Content;