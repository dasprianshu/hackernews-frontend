import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner';
import "./Content.css";
import timeElapsed from './ElapsedTime.js';
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
		fetchItems();   // eslint-disable-next-line
	}, [])

    function getHostName(fullURL) {
        try {
            const url = new URL(fullURL);
            return url.hostname;
        } catch (error) {
            console.error('Invalid URL:', fullURL);
            return null; 
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
                    <Link to={`/thread/${itemId}`}>
                        <button className="btn md:btn-wide View-post Time bg-neutral normal-case btn-sm text-md hover:bg-accent">
                         Discussion
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Content;