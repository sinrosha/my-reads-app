import React from "react";
import Book from "./Book";

class Books extends React.Component {

    render() {
        let { books, changeShelf } = this.props;
        
        return (
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map( book => <Book key={book.id} book={book} changeShelf={changeShelf}/>)}
            </ol>
          </div>
        )
    }
}

export default Books;