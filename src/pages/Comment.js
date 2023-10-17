import { useState, useEffect } from 'react';
import './Comment.css';
import timeElapsed from './ElapsedTime';
import parseText from './TextParser';

function Comment({itemID}) {
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try{
                const response = await fetch(`${itemUrl}${itemID}.json`);
                const dataNeeded = await response.json();	
                setData(dataNeeded);
                // setIsLoading(false);
            }
            catch(err){
                console.log(err);
                // setIsLoading(false);
            }
        }
        fetchItems();   // eslint-disable-next-line
    }, []);

    return (
        <div className="Comment-cards">
            <div className="Comment-card bg-base-100">
                <div className='Content-info'>
                    <span className='text-accent'><i>{data.by}</i></span> 
                    <span className='Comment-time text-secondary text-xs'>{timeElapsed(data.time)}</span>
                </div>
                    <h2 className="Comment-title ">{parseText(data.text)}</h2>
            </div>

            {data.kids && data.kids.map((item) => (
                <Comment itemID={item} />
            ))}
        </div>
    );
}

export default Comment;