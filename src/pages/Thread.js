import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Comment from './Comment';
import timeElapsed from './ElapsedTime';
import parseText from './TextParser';
import './Thread.css';

function Thread() {
    const { postId } = useParams();
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const commentText = data.text ? parseText(data.text) : <p></p>;


    useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${itemUrl}${postId}.json`);
				const dataNeeded = await response.json();	
				setData(dataNeeded);
                setIsLoading(false);
			}
			catch(err){
				console.log(err);
                setIsLoading(false);
			}
		}
		fetchItems();   // eslint-disable-next-line
	}, [])
    return ( 
        <div className='Threads'>
            <div className='Threads-canvas bg-base-300'>
                {/* <Content itemId={postId}/> */}
                {/* <br></br> */}
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
                <div className='Comment-cards'>
                    <div className='Comment-card bg-accent-content' style={{marginBottom: "1%", display: `${isLoading ? "none" : " "}`}}>
                        <a href={data.url} target='blank' rel="noreferrer noopener">
                            <h2 className="card-title link link-hover link-accent">{data.title}</h2>
                        </a>
                        <div className='Content-info'>
                            <span className='Comment-username text-base-content'><i>{data.by}</i></span> 
                            <span className='Comment-time text-base-content '>{timeElapsed(data.time)}</span>
                        </div>
                    <div className="Comment-text " dangerouslySetInnerHTML={{ __html: commentText.innerHTML }}></div> 
                    </div>
                </div>
                <div className='Thread-status'><h2>{data.descendants} Comments</h2><h2>{data.score} Points</h2></div>

                {data.kids && data.kids.map((item) => (
                    <Comment itemID={item} tIndex={0} />
                ))}
            </div>
        </div>
    );
}

export default Thread;