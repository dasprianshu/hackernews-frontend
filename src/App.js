import './App.css';
import Nav from './Nav';
import Up from './assets/arrow_up.svg';
import Home from './pages/Home';
import { useState} from 'react';


function App() {

	const [reqType, setReqType] = useState('top');

	const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop + 30;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrolled > 900 && scrolled < documentHeight - windowHeight) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', toggleVisible);
	// console.log(window.location.pathname)
	
  return (
    <div id='top' className="App bg-base-200">
		<Nav reqType={reqType} setReqType={setReqType}/>

		<Home reqType={reqType}/>
		
		<button 
		onClick={scrollToTop}
		className="btn btn-square btn-outline btn-accent App-up"
		style={{display: visible ? 'block' : 'none'}}
		>
			<img src={Up} alt="up" />
		</button>
    </div>
  );
}

export default App;
