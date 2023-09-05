import Up from './arrow_up.svg';
import './App.css';
import Nav from './Nav';
import Content from "./Content"

function App() {
	let printContent = [];
	for(let i=1; i<=30; i++){
		printContent.push(<Content id={i}/>);
	}
  return (
    <div className="App bg-base-200">
		<Nav/>
		<div id='St' className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				{printContent}
			</div>
		</div>
		<button className="btn btn-square btn-outline btn-accent App-up">
        	<img src={Up} alt="up" />
		</button>
    </div>
  );
}

export default App;
