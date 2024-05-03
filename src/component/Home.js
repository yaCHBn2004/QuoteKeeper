import NavBar from "./NavBar";
import "./Home.css";
import RecentBooks from "./RecentBooks";
import DateSelector from "./DateSelector";
const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <div className="content">
        <h1>Home Page</h1>
        <DateSelector />
        <div className="R-books">
          <h1>Your recent books</h1>
          <RecentBooks />
        </div>
      </div>
    </div>
  );
};

export default Home;
