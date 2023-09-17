import './App.css';
import Nav from './Nav';
import Content from "./Content";
import { RotatingSquare } from 'react-loader-spinner';
import { useState, useEffect} from 'react';


function App() {
	const storyUrl = "https://hacker-news.firebaseio.com/v0/";
	const [reqType, setReqType] = useState('top');
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
    <div id='top' className="App bg-base-200">
		<Nav reqType={reqType} setReqType={setReqType}/>

		<div id='St' className='Canvas '>
			<div id='scroll-container' className="artboard bg-base-300 Contain">
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
    </div>
  );
}

export default App;
