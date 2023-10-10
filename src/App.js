import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Nav from './Nav';
import Up from './assets/arrow_up.svg';
import Canvas from './pages/Canvas';
import Thread from './pages/Thread';

function App() {

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
	
  return (
    <div id='top' className="App bg-base-200">
		<Nav/>

		<Routes>
      <Route path='/' element={<Navigate replace to="/top" /> } />

      <Route path='/top' element={<Canvas type="top"/>} />
      <Route path='/new' element={<Canvas type="new"/>} />
      <Route path='/best' element={<Canvas type="best"/>} />
      <Route path='/thread/:postId' element={<Thread/>} />
    </Routes>
		
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
