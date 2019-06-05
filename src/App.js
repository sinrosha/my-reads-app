import React from 'react'
import Search from "./Search";
import ListBooks from "./ListBooks";
import { BrowserRouter, Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((response) => { 
      this.setState({
        books: response,
      });
    });
  }

  changeShelf = (id, shelf) => {
      BooksAPI.update({id}, shelf)
      .then((response) => {
        BooksAPI.getAll()
          .then((response) => {
            this.setState({ books: response});
        })
      });
      
  }

  render() {
    return (
      <div className="app"> 
      <BrowserRouter>
       
          <Route 
            path='/' 
            exact 
            render={(props) => <ListBooks {...props} books={this.state.books} changeShelf={this.changeShelf} />}
          />
          <Route 
              path="/search" 
              render={(props) => <Search {...props} changeShelf={this.changeShelf} books={this.state.books}/>}/>
        </BrowserRouter>
      </div>  
      
    )
  }
}

export default BooksApp
