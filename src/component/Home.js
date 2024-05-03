import NavBar from "./NavBar";
import "./Home.css"
import RecentBooks from "./RecentBooks"; 
const Home = () => {
    return ( 
        <div className="Home" >
           <NavBar/>
         <h1>Home</h1>
         <div className="R-books">
          <h1>Your recent books</h1>
         <RecentBooks/>
         </div>
        </div>
     );
}
 
export default Home;