import React from "react";
import Books from "./Books";
import { Link } from "react-router-dom";

class ListBooks extends React.Component {

    render() {
      let { books, changeShelf } = this.props;
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <Books books={books.filter(book => book.shelf === "currentlyReading")} changeShelf={changeShelf}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <Books books={books.filter(book => book.shelf === "wantToRead")} changeShelf={changeShelf}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <Books books={books.filter(book => book.shelf === "read")} changeShelf={changeShelf}/>
                </div>
              </div>
            </div>
            <div className="open-search">
             <Link to="/search"> <button>Add a book</button></Link>
            </div>
          </div>
        )
    }
}

export default ListBooks;