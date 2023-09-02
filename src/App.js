// import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Content from "./Content"

function App() {
  return (
    <div className="App">
		<Nav/>
		<div className='Canvas'>
			<div className="artboard bg-neutral Contain">
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
