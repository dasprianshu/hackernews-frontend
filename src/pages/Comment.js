import { useState, useEffect } from 'react';
import './Comment.css';
import timeElapsed from './ElapsedTime';
import parseText from './TextParser';

function Comment({itemID, tIndex}) {
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const commentText = parseText(data.text);

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

    if(data.deleted === true)
        return (<span></span>);

    const colorArr = ["border-accent-focus", "border-orange-500", "border-emerald-500", "border-red-500", "border-lime-500", "border-blue-500", "border-pink-500", "border-green-500", "border-purple-500", "border-red-300"];

    return (
        <div className={`Comment-cards border-l-2 sm:border-l-4 border-solid ${colorArr[tIndex]}`}>
            <div className="Comment-card Comment-text bg-base-200" style={{display: `${isLoading ? " " : "none"}`}}>Here is a sentence to know that the content is loading.</div>

            <div className="Comment-card bg-base-200 " style={{display: `${isLoading ? "none" : " "}`}}>
                <div className='Content-info'>
                    <span className='Comment-username text-accent'><i>{data.by}</i></span> 
                    {/* <span className='Comment-time text-secondary '>{itemID}</span> */}
                    <a href={`https://hacker-news.firebaseio.com/v0/item/${itemID}.json?print=pretty`} target='blank'>
                        <span className='Comment-time text-warning'>{timeElapsed(data.time)}</span>
                    </a>
                </div>
                    <div className="Comment-text " dangerouslySetInnerHTML={{ __html: commentText.innerHTML }}></div>
            </div>

            {data.kids && data.kids.map((item) => (
                <Comment itemID={item} tIndex={tIndex+1}/>
            ))}
        </div>
    );
}

export default Comment;