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
  borderRadius: "10px 10px 0 0",
  borderTop: "solid 1px",
  boxShadow: "0 -0.5px 5px",
  height: "fill"
}

function App() {
// set state
  const [allBooks, setAllBooks] = useState([])
  const [displayBooks, setDisplayBooks] = useState([])
  const [bookshelf, setBookShelf] = useState([])
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
        setDisplayBooks(data)
        setBookShelf(data.filter(item => item.bookshelf !== false))
      })
  }, [])

  function handleFormChange(e) {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  function handleChecked(e) {
    setFormData({...formData, [e.target.name] : e.target.checked})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/books', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData) 
    }).then(r => r.json())
    .then(data => {
      setDisplayBooks([...allBooks, data])
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
// bookshelf functionality
  function updateShelf(clickedBook) {
    if (clickedBook.bookshelf === true) {
      const shelf = [...bookshelf, clickedBook]
      setBookShelf(shelf)
    } else {
      const shelf = bookshelf.filter(item => item.id !== clickedBook.id)
      setBookShelf(shelf)
    }
  }

  return (
    <div>
      <Header />
      <div style={pageStyle}>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home allBooks={displayBooks} updateShelf={updateShelf}/>
          </Route>
          <Route exact path="/bookshelf">
            <Bookshelf bookshelf={bookshelf} updateShelf={updateShelf}/>
          </Route>
          <Route exact path="/addbook">
            <AddBook formData={formData} handleFormChange={handleFormChange} handleSubmit={handleSubmit} handleChecked={handleChecked} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
