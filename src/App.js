import SideBar from './component/SideBar';
import './App.css';
import {BrowserRouter as Router , Route , Switch , Routes } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Quotes from './component/Quotes';
import BookMark from './component/BookMark';
import MyBook from './component/MyBook';
import Trash from './component/Trash';
import Settings from './component/Settings';



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
        <Route path="/BookMark" element={<BookMark/>} />
        <Route path="/MyBook" element={<MyBook/>} />
        <Route path="/Trash" element={<Trash/>} />
        <Route path="/Settings" element={<Settings/>} />

    </Routes>
        
    
   
    </div>
    </Router>
  );
}

export default App;
