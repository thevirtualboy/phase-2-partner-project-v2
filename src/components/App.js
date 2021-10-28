import '../App.css';

// packages
import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom';

// components
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import Search from './Search';
import Bookshelf from './Bookshelf';
import ShelfSearch from './ShelfSearch';
import AddBookForm from './AddBookForm';
import BookDetails from './BookDetails';

// css
const pageStyle = {
  backgroundColor: "#f3eeda",
  borderRadius: "10px 10px 0 0",
  borderTop: "solid 1px",
  boxShadow: "0 -0.5px 5px",
  minHeight: "100vh",
  position: "relative",
  top: "-40px"
}


function App() {
  // primary data
  const [allBooks, setAllBooks] = useState([])

  // displayed data
  const [displayBooks, setDisplayBooks] = useState([])
  const [displayShelf, setDisplayShelf] = useState([])

  // search states
  const [search, setSearch] = useState("")
  const [shelfSearch, setShelfSearch] = useState("")

  // form state
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    img: "",
    genre: "",
    description: "",
    publishYear: "",
    bookshelf: false
  })


  // GET data from local db.json
  useEffect(() =>{
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => {
        setAllBooks(data)
      })
  }, [])

  useEffect(() => {
    setDisplayBooks(allBooks)
    setDisplayShelf(allBooks.filter(book => book.bookshelf !== false))
  }, [allBooks])


  // form submit functionality
  function handleFormChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function handleChecked(e) {
    setFormData({...formData, [e.target.name] : e.target.checked})
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    if (formData.img === "") {
      formData.img = "http://lgimages.s3.amazonaws.com/nc-md.gif"
    }
    fetch('http://localhost:3000/books', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData) 
    })
      .then(r => r.json())
      .then(data => {
        setAllBooks([...displayBooks, data])
        setDisplayBooks([...displayBooks, data])
        updateShelf(data)
        setFormData({
          id: "",
          title: "",
          author: "",
          img: "",
          genre: "",
          description: "",
          publishYear: "",
          bookshelf: false
        })

    })
  }


// search bars
  function handleSearch(e) {
    setSearch(e.target.value)
    const tempBooks = allBooks.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setDisplayBooks(tempBooks)
  }

  function handleShelfSearch(e) {
    setShelfSearch(e.target.value)
    const tempBooks = displayShelf.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setDisplayShelf(tempBooks)
  }


// update display for bookshelf add/remove
  function updateShelf(clickedBook) {
    const updatedBooks = allBooks.map(book => book.id === clickedBook.id ? clickedBook : book)
    setDisplayBooks(updatedBooks)
    setDisplayShelf(updatedBooks.filter(item => item.bookshelf !== false))
  }
  
// delete a book from the catalog
  function deleteBook(clickedBook) {
    const updatedBooks = displayBooks.filter(book => book.id !== clickedBook.id)
    setDisplayBooks(updatedBooks)
    setDisplayShelf(updatedBooks.filter(item => item.bookshelf !== false))
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

// JSX return
  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Search
              search={search}
              handleSearch={handleSearch}
            />
            <Home
              allBooks={displayBooks}
              updateShelf={updateShelf}
              handleDelete={handleDelete}
            />
          </Route>
          <Route exact path="/bookshelf">
            <ShelfSearch
              search={shelfSearch}
              handleSearch={handleShelfSearch}
            />
            <Bookshelf
              bookshelf={displayShelf}
              updateShelf={updateShelf}
              handleDelete={handleDelete}
            />
          </Route>
          <Route exact path="/addbook">
            <AddBookForm
              formData={formData}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
              handleChecked={handleChecked}
            />
          </Route>
          <Route exact path="/book/:id">
            <BookDetails
              handleDelete={handleDelete}
              updateShelf={updateShelf}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
