import '../App.css';
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Bookshelf from './Bookshelf';
import NavBar from './NavBar';
import AddBook from './AddBook';
import Header from './Header';

const pageStyle = {
  backgroundColor: "#f3eeda",
  borderRadius: "20px 20px 0 0",
  borderTop: "solid 1px",
  boxShadow: "0 -0.5px 5px"
}

function App() {
// set state
  const [allBooks, setAllBooks] = useState([])

// GET data from local db.json
  useEffect(() =>{
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => setAllBooks(data))
  }, [])

// bookshelf functionality
  const bookshelf = allBooks.filter(book => book.bookshelf === true)

  function updateShelf(clickedBook) {
    const updatedBooks = allBooks.map(book =>
      book.id === clickedBook.id? clickedBook : book)
    setAllBooks(updatedBooks)
  }

// delete a book from the catalog
  function deleteBook(clickedBook) {
    const updatedBooks = allBooks.filter(book => book.id !== clickedBook.id)
    setAllBooks(updatedBooks)
  }
  
  function handleDelete(book) {
    fetch(`http://localhost:3000/books/${book.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
    
    deleteBook(book)
}

  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home allBooks={allBooks} updateShelf={updateShelf} handleDelete={handleDelete}/>
          </Route>
          <Route exact path="/bookshelf">
            <Bookshelf bookshelf={bookshelf} updateShelf={updateShelf} handleDelete={handleDelete}/>
          </Route>
          <Route exact path="/addbook">
            <AddBook />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
