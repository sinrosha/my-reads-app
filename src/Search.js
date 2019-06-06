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

				if(Array.isArray(response)) {
					response.map(newBook => {
						this.props.books.map(oldBook => {
							if(newBook.id === oldBook.id) {
								newBook.shelf = oldBook.shelf;
							}
							return "1";
						})
						return "1";
					})
				}

				this.setState((state) => ({
					books: response
				}));

			 })
			}
	 }
	  
	render() {
	
		let books = this.state.books;
		let { changeShelf } = this.props;

			return (
				<div className="search-books">
					<div className="search-books-bar">
						<Link to="/" ><button className="close-search" >Close</button></Link>
						<div className="search-books-input-wrapper">
							<input 
								type="text" 
								onChange={(e) => this.handleChange(e.target.value)} 
								value={this.state.query} 
								placeholder="Search by title or author"
							/>
						</div>
					</div>
					<div className="search-books-results">
						<ol className="books-grid">
							{
								Array.isArray(books) && this.state.query.length > 0 
									? 	
								books.map( book => ( 
									<Book 
										key={book.id} 
										book={book} 
										changeShelf={changeShelf}/>
									)
								)
								: 
								<h2>
									{
										this.state.query.length > 0 
										? 
										"We could not find what you were looking for, please try som3 other search terms" 
								    : 
									  "Search your favourite books and add them to your booshelf"
									}
								</h2>
							}
						</ol>
					</div>
				</div>
			)
	}
}

export default Search;