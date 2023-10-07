import React, { useState, useEffect } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import Content from "./Content";
import "./Canvas.css";

function Canvas({type}) {
    const storyUrl = "https://hacker-news.firebaseio.com/v0/";
	const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const fetchItems = async () => {
			try{
				const storedData = sessionStorage.getItem(`${type}`);	
				if(storedData){
					setData(JSON.parse(storedData));
				}
				else{
					const response = await fetch(`${storyUrl}${type}stories.json`);
					const resp = await response.json();	
					const dataNeeded = await resp.slice(0, 30);
					sessionStorage.setItem(`${type}`, JSON.stringify(dataNeeded));
					setData(dataNeeded);
				}
				setIsLoading(false);
			}
			catch(err){
				// console.log(err);
				setIsLoading(false);
			}
		}

		setData([]);
		setIsLoading(true);
		fetchItems();
	}, [type])

	let allStories = data.map(itemId => (<Content itemId={itemId}/>));

    return (
        <div id='St' className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				<RotatingSquare
				height="200"
				width="200"
				color="hsl(var(--a))"
				ariaLabel="rotating-square-loading"
				strokeWidth="5"
				wrapperStyle={{marginTop: "30vh"}}
				wrapperClass=""
				visible={isLoading}
				/>
				{allStories}
			</div>
		</div>
    );
}

export default Canvas;