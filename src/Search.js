import React from "react";
import { Link } from "react-router-dom"
import Book from "./Book"
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {

	 state = {
		 books: [],
		 query: ""
	 }

	 handleChange = (query) => {
      this.setState((state) => ({
				query
			}))

			if(query.length > 0 ) {
				BooksAPI.search(query)
			  .then((response) => {
				this.setState((state) => ({
					books: response
				}));
			 })
			}
	 }
	 componentDidUpdate() {

	}
	  
		render() {
			let books = this.state.books;
			let { changeShelf } = this.props;
				return (
					   
						<div className="search-books">
								<div className="search-books-bar">
										<Link to="/" ><button className="close-search" >Close</button></Link>
										<div className="search-books-input-wrapper">
												<input type="text" onChange={(e) => this.handleChange(e.target.value)} value={this.state.query} placeholder="Search by title or author"/>
										</div>
								</div>
								<div className="search-books-results">
										<ol className="books-grid">
										 {Array.isArray(books) && this.state.query.length > 0 ? books.map( book => ( 
													<Book 
														key={book.id} 
														book={book} 
														changeShelf={changeShelf}/>))
													: 
													<h2>
														{this.state.query.length > 0 ? "We could not find what you were looking for, please try soem other search terms" 
															: 
															"Search your facourite books and add them to your booshelf"
														}
													</h2>}
										</ol>
								</div>
					</div>
				)
		}
}

export default Search;