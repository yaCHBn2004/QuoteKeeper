import SideBar from './component/SideBar';
import './App.css';
import {BrowserRouter as Router , Route , Switch , Routes } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Quotes from './component/Quotes';




function App() {
  document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });
  
  return (
    <Router>
    <div className="App">  
    <div class="cursor"></div>
    <SideBar/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Quotes" element={<Quotes/>} />
    </Routes>
        
    
   
    </div>
    </Router>
  );
}

export default App;
