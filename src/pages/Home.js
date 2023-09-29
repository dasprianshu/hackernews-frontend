import React, { useState, useEffect } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import Content from "./Content";
import "./Home.css";

function Home({reqType}) {
    const storyUrl = "https://hacker-news.firebaseio.com/v0/";
	const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${storyUrl}${reqType}stories.json`);
				const data = await response.json();	
				const dataNeeded = await data.slice(0, 30);
				setItems(dataNeeded);
				setIsLoading(false);
			}
			catch(err){
				console.log(err);
				setIsLoading(false);
			}
		}
		setItems([]);
		setIsLoading(true);

		fetchItems();
	}, [reqType])


	let allStories = items.map(itemId => (<Content itemId={itemId}/>));

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

export default Home;