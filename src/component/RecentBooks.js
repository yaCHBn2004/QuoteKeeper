import { useState } from "react";
import React, { useRef } from 'react';
import "./RecentBooks.css";
const RecentBooks = () => {
  const bookListRef = useRef(null);
  const [books, setBooks] = useState([
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },

  ]);
 

  const scrollLeft = () => {
    bookListRef.current.scrollBy({
      left: -277, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    bookListRef.current.scrollBy({
      left: 277, // Adjust the scroll distance as needed
      behavior: 'smooth'
    });
  };
  return (
    <div className="RecentBooks">
    <button onClick={scrollLeft} id="left"><img src="./icons/left.png"/></button>
    <div ref={bookListRef}  className="BookList">
      {books.map((book) => (
        <div className="book">
          <div className="bookImg">
            <img src={book.srcImg} />
          </div>
          <div className="bookInfo">
            <h1>{book.title}</h1>
            <p>{book.desc}</p>
            <button>Thriller</button>
          </div>
        </div>
      ))}
    </div>
    <button onClick={scrollRight} id="right"><img src="./icons/right.png"/></button>
    </div>
  );
};

export default RecentBooks;
