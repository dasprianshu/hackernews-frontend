import { useState, useEffect } from 'react';
import './Comment.css';
import timeElapsed from './ElapsedTime';
import parseText from './TextParser';

function Comment({itemID}) {
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [data, setData] = useState([]);
    const commentText = parseText(data.text);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const response = await fetch(`${itemUrl}${itemID}.json`);
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
    }, []);

    return (
        <div className="Comment-cards">
            <div className="Comment-card Comment-text bg-base-100" style={{display: `${isLoading ? " " : "none"}`}}>Here is a sentence to know the content is Loading...</div>

            <div className="Comment-card bg-base-100" style={{display: `${isLoading ? "none" : " "}`}}>
                <div className='Content-info'>
                    <span className='Comment-username text-accent'><i>{data.by}</i></span> 
                    {/* <span className='Comment-time text-secondary '>{itemID}</span> */}
                    <span className='Comment-time text-secondary '>{timeElapsed(data.time)}</span>
                </div>
                    <div className="Comment-text " dangerouslySetInnerHTML={{ __html: commentText.innerHTML }}></div>
            </div>

            {data.kids && data.kids.map((item) => (
                <Comment itemID={item} />
            ))}
        </div>
    );
}

export default Comment;