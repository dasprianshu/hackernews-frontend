import './App.css';
import Nav from './Nav';
import Content from "./Content"
import { useState, useEffect} from 'react';
// https://hacker-news.firebaseio.com/v0/beststories.json
function App() {
	const storyUrl = "https://hacker-news.firebaseio.com/v0/";
	const [reqType, setReqType] = useState('top');
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${storyUrl}${reqType}stories.json`);
				setItems([]);
				const data = await response.json();	
				const dataNeeded = await data.slice(0, 30);
				setItems(dataNeeded);
			}
			catch(err){
				console.log(err);
			}
		}

		fetchItems();
	}, [reqType])

	// console.log(items);
	let allStories = items.map(itemId => (<Content itemId={itemId}/>));

	
  return (
    <div id='top' className="App bg-base-200">
		<Nav reqType={reqType} setReqType={setReqType}/>

		<div id='St' className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				{allStories}
			</div>
		</div>
    </div>
  );
}

export default App;
