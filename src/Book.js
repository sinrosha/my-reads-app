import React from "react";

class Book extends React.Component {
  
  onChange = (shelf, id, changeShelf) => {
    changeShelf(id, shelf);
  }

  render() {
    let { book, changeShelf} = this.props;
		let thumbnailUrl = book.imageLinks ? book.imageLinks.smallThumbnail 
		  :
		 "https://place-hold.it/128x193?text=thumbnail%20missing";
      return (
        <li key={book.id}>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${thumbnailUrl})`}}>
              </div>
              <div className="book-shelf-changer">
                <select onChange={(e) => this.onChange(e.target.value, e.target.name, changeShelf)} name={book.id} value={book.shelf ? book.shelf : "none"}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
              <div className="book-authors">{Array.isArray(book.authors) ? book.authors.map(author => author): null}</div>
            </div > 
            </li>
        )
    }
}

export default Book;