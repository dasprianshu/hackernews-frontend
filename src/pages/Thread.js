import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';

function Thread() {
    const { postId } = useParams();
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [story, setStory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${itemUrl}${postId}.json`);
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
    const disp = JSON.stringify(story.kids);
    return ( 
        <div style={{position: "absolute", top: "15%", left: "5%", width: "90vw", wordBreak: "break-word"}}>
            <h1>The Discussion page is yet to be Made:)</h1>
            <br></br>
            <h2>PostId: {postId}</h2>
            <br></br>
            <h1>Below are the associated Kids/Comment IDs of the Story:</h1>
            <h1>{disp}</h1>
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
        </div>
    );
}

export default Thread;