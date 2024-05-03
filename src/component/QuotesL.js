import "./QuotesL.css" ; 
import { useState } from "react";

const QuotesL = () => {
    const [QuotesL, setBQuotes] = useState([
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        } , 
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        },
        {
          Quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
          writer: "Anonymous",
        }
       
      ]);
    return ( 
        <div className="QuotesL">
        {QuotesL.map((quote) => (
          <div className="quote">
            <div className="img">
              <img src="./icons/,,.png" />
            </div>
            <div className="info">
              <p>{quote.Quote}</p>
              <h3>{quote.writer}</h3>
            </div>
          </div>
        ))}
      </div>
     );
}
 
export default QuotesL;