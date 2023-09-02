// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Content from "./Content"

function App() {
  return (
    <div className="App bg-base-200">
		<Nav/>
		<div className='Canvas '>
			<div className="artboard bg-base-300 Contain">
				<Content/>
				<Content/>
				<Content/>
				<Content/>
				<Content/>
			</div>
		</div>
		
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
