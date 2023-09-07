import Up from './assets/arrow_up.svg';
import './App.css';
import Nav from './Nav';
import Content from "./Content"
import { useState, useEffect} from 'react';
// https://hacker-news.firebaseio.com/v0/beststories.json
function App() {
	const storyUrl = "https://hacker-news.firebaseio.com/v0/";
	const [reqType, setReqType] = useState('best');
	const [items, setItems] = useState([]);
	
	useEffect(() => {
		const fetchItems = async () => {
			try{
				const response = await fetch(`${storyUrl}${reqType}stories.json`);
				const data = await response.json();	
				let dataNeeded = data.slice(0, 100);
				setItems(dataNeeded);
			}
			catch(err){
				console.log(err);
			}
		}

		fetchItems();
	}, [reqType])

	// console.log(items);

	// let printContent = [];
	// for(let i=1; i<=30; i++){
	// 	let rand = Math.floor(Math.random() * 1000);
	// 	let rand2 = Math.floor(Math.random() * 50);
	// 	printContent.push(<Content id={i} points={rand} comments={rand2}/>);
	// }

	
  return (
    <div id='top' className="App bg-base-200">
		<Nav reqType={reqType} setReqType={setReqType}/>

		<div id='St' className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				{items.map(itemId => (
				<Content itemId={itemId}/>
				))}
			</div>
		</div>

		<a href='#top'>
			<button className="btn btn-square btn-outline btn-accent App-up">
				<img src={Up} alt="up" />
			</button>
		</a>
    </div>
  );
}

export default App;
