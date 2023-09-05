import Up from './arrow_up.svg';
import './App.css';
import Nav from './Nav';
import Content from "./Content"

function App() {
	// let beststories = "https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty";
	let printContent = [];
	for(let i=1; i<=30; i++){
		let rand = Math.floor(Math.random() * 1000);
		let rand2 = Math.floor(Math.random() * 50);
		printContent.push(<Content id={i} points={rand} comments={rand2}/>);
	}
  return (
    <div id='top' className="App bg-base-200">
		<Nav/>
		<div id='St' className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				{printContent}
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
