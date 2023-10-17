import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import Comment from './Comment';
// import Content from './Content';
import './Thread.css';

function Thread() {
    const { postId } = useParams();
    const itemUrl = "https://hacker-news.firebaseio.com/v0/item/";
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                {data.kids && data.kids.map((item) => (
                    <Comment itemID={item} />
                ))}
            </div>
        </div>
    );
}

export default Thread;