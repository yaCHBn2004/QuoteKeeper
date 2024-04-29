import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [userName, setUserName] = useState("Imed Bousekheia");
  const [place, setPlace] = useState({ country: "algeria", zone: "tared" });

  return (
    <div className="NavBar">
      <div className="search">
        <button>
          <img src="./icons/search.png" alt="search" />
        </button>
        <input type="text" placeholder="Search for anything..." />
      </div>
      <div className="PerInfo">
        <div className="Info">
          <div className="InfoL">
            <h1>{userName}</h1>
            <h2>
              {place.zone}-{place.country}
            </h2>
          </div>
          <div id="InfoR">
            <img src="./icons/low.png" alt="show log out " />
          </div>
        </div>
        <div className="listHover">
          <button>switch account</button>
          <button>LogOut</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
