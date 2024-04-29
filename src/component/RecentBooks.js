import { useState } from "react";
import "./RecentBooks.css";
const RecentBooks = () => {
  const [books, setBooks] = useState([
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
    { srcImg: "./Dune.png", title: "dune", desc: "Frank Herbert" },
  ]);
  return (
    <div className="RecentBooks">

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
  );
};

export default RecentBooks;
