import { useState } from "react";
import NavBar from "./NavBar.js"
import "./Quotes.css";
const Quotes = () => {
const [tags , setTags] = useState([
    "Life" , "Design" , "insperational" , "Philosoghy"
])
    return ( 

        <div className="Quotes">
            <NavBar/>
            <h1>All quotes</h1>
            <div className="tags">
            {tags.map((tag)=>(
                <div className="tag">
                    <h1>#{tag}</h1>
                </div>
            ))}
            </div>


            




        </div>
     );
}
 
export default Quotes;