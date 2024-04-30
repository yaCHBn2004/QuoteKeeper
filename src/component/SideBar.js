import { Link } from "react-router-dom";
import "./SideBar.css";
import React, { useEffect, useState } from "react";


const SideBar = () => {
  const [NavState, setNavState] = useState(true);
  const activateNav = () => {
    setNavState(!NavState);
  };
  const [quote , setQuote] =  useState("We don’t have any notice for you, till then you can share your thoughts with your peers.") ; 
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(getRandomLightColor);
  const [darkenedColor, setDarkenedColor] = useState(getDarkenedColor(backgroundColor));
    useEffect(() => {
      const intervalId = setInterval(() => {
        setBackgroundColor(getRandomLightColor());
        setDarkenedColor(getDarkenedColor(backgroundColor));
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    function getRandomLightColor() {
      const colors = ['#FFCCCC', '#FFDDCC', '#FFEACC', '#FFFFCC', '#E5FFCC', '#CCFFCC', '#CCFFE5', '#CCFFFF', '#CCE5FF', '#CCCCFF', '#E5CCFF', '#FFCCFF'];
    var color =  colors[Math.floor(Math.random() * colors.length)];
    return color ;   
    }
    function getDarkenedColor(color) {
      // const darkenedFactor = 0.85; 
      return color.replace('#', '').match(/.{1,2}/g).map(component => Math.round(parseInt(component, 16) * darkenedFactor).toString(16)).join('');
    }

  console.log(getDarkenedColor(backgroundColor)) ; 
  
  return (
    <div id="SideBar" className={NavState ? "active" : "hidden"}>
      
      {/* here we have the title  */}
      <div className="title" onClick={activateNav}>
        <img id="logo" src="logo.png" alt="logo" />
        <h1>QuoteKeeper</h1>
        <button>
          <img src="./icons/out.png" />
        </button>
      </div>

      {/* here we have the navigation links*/}

      <div className="nav" >
        <li>
          <Link to="/">
            <img src="./icons/home.png" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/Quotes">
            <img src="./icons/quotes.png" />
            <span>Quotes</span>
          </Link>
        </li>
        <li>
          <Link to="/BookMark">
            <img src="./icons/bookMark.png" />
            <span>BookMark</span>
          </Link>
        </li>
        <li>
          <Link to="/Trash">
            <img src="./icons/trash.png" />
            <span>Trash</span>
          </Link>
        </li>
        <li>
          <Link to="/MyBooks">
            <img src="./icons/myBooks.png" />
            <span>MyBooks</span>
          </Link>
        </li>
        <li>
          <Link to="/Settings">
            <img src="./icons/settings.png" />
            <span>Settings</span>
          </Link>
        </li>
      </div>
      <div className="thoughtsTime" style={{boxShadow: `0 4px 4px ${backgroundColor} `,backgroundColor:(backgroundColor)}}>
        
        <h1>Thoughts Time</h1>
        <img src="./lightY.png" style={{backgroundColor:(backgroundColor )}}/>
        <p>{quote}</p>
        <button style={{backgroundColor : darkenedColor}}>Write a message</button>
      </div>
    </div>
  );
};

export default SideBar;
